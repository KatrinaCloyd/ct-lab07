const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/utils/twilio');
const twilio = require('../lib/utils/twilio');

jest.mock('twilio', () => () => ({
  messages: {
    create: jest.fn(),
  },
}));

describe('ct-lab07 routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a new user with random cocktail', async () => {
    const res = await request(app)
      .post('/api/v1/randococktail')
      .send({ userName: 'Katrina', favDrink: 'Moscow Mule', phoneNumber: '9376090603' });
    expect(twilio.sendSms).toHaveBeenCalledTimes(2);
    expect(res.body).toEqual({
      id: expect.any(String),
      userName: 'Katrina',
      favDrink: 'Moscow Mule',
      phoneNumber: '+19376090603',
    });
  });

});

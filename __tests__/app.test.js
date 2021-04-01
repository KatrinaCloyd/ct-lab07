const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('ct-lab07 routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a new user with random cocktail', async () => {
    const res = await request(app)
      .post('/api/v1/randococktail')
      .send({ userName: 'Katrina', favoriteDrink: 'Moscow Mule', phoneNumber: '123-123-1234' });
    // expect(twilio.sendSms).toHaveBeenCalledTimes(1);
    expect(res.body).toEqual({
      id: expect.any(String),
      userName: 'Katrina',
      favoriteDrink: 'Moscow Mule',
      phoneNumber: '123-123-1234',
    });
  });

});

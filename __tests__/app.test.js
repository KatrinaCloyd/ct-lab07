const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const UserService = require('../lib/services/UserService');

jest.mock('../lib/utils/twilio');
const twilio = require('../lib/utils/twilio');

jest.mock('twilio', () => () => ({
  messages: {
    create: jest.fn(),
  },
}));

describe('ct-lab07 routes', () => {
  beforeEach(() => {
    twilio.sendSms.mockReset();
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

  it('gets all users', async () => {
    await UserService.create({ userName: 'Katrina', favDrink: 'Moscow Mule', phoneNumber: '9376090603' });
    await UserService.create({ userName: 'Booger', favDrink: 'Old Fashioned', phoneNumber: '9376090603' });
    const expectation = [
      {
        id: expect.any(String),
        userName: 'Katrina',
        favDrink: 'Moscow Mule',
        phoneNumber: '+19376090603'
      }, {
        id: expect.any(String),
        userName: 'Booger',
        favDrink: 'Old Fashioned',
        phoneNumber: '+19376090603'
      }]
    const res = await request(app)
      .get('/api/v1/randococktail');
    expect(res.body).toEqual(expectation);
  });

  it('gets new random cocktail and sends to user making the request', async () => {
    await UserService.create({ userName: 'Katrina', favDrink: 'Moscow Mule', phoneNumber: '9376090603' });
    const res = await request(app)
      .get('/api/v1/randococktail/1');
    expect(twilio.sendSms).toHaveBeenCalledTimes(3);
    expect(res.text).toEqual('done');
  });

  it('updates a users favorite cocktail by user id', async () => {
    await UserService.create({ userName: 'Katrina', favDrink: 'Moscow Mule', phoneNumber: '9376090603' });
    const res = await request(app)
      .put('/api/v1/randococktail/1')
      .send({ newFav: 'Dirrrty Martini' });
    expect(res.body).toEqual({ favDrink: "Dirrrty Martini", id: "1", phoneNumber: "+19376090603", userName: "Katrina" });
    expect(twilio.sendSms).toHaveBeenCalledTimes(3);
  });

});

const request = require('supertest');
const httpStatus = require('http-status');
const { faker } = require('@faker-js/faker');
const { v4 } = require('uuid');
const app = require('../../src/app');
const { userOne, admin, insertUsers } = require('../fixtures/user.fixture');
const { userOneAccessToken, adminAccessToken } = require('../fixtures/token.fixture');
const knex = require('../setup');

describe('User routes', () => {
  beforeEach(async () => {
    await insertUsers([userOne]);
    await insertUsers([admin]);

    newUser = {
      name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      role: 'user',
      password: 'password1',
    };
  });
  describe('GET /api/v1/users', () => {
    test('Should return 200 and the user object if user is exist', async () => {
      const res = await request(app)
        .get(`/v1/users/${userOne.id}`)
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .expect(httpStatus.OK);

      expect(res.body.data).toMatchObject({
        id: userOne.id,
        name: userOne.name,
        email: userOne.email,
        createdAt: expect.anything(),
      });
    });
    test('Should return 401 if access token is missing', async () => {
      await request(app).get(`/v1/users/${userOne.id}`).expect(httpStatus.UNAUTHORIZED);
    });
    test('Should return 404 if user is not found', async () => {
      await request(app)
        .get(`/v1/users/${v4()}`)
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .expect(httpStatus.NOT_FOUND);
    });
    test('Should return 400 if id given not an UUID', async () => {
      await request(app)
        .get('/v1/users/123')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .expect(httpStatus.BAD_REQUEST);
    });
  });
});

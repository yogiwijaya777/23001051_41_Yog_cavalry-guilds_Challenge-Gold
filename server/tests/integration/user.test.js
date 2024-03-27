const request = require('supertest');
const httpStatus = require('http-status');
const { faker } = require('@faker-js/faker');
const { v4 } = require('uuid');
const app = require('../../src/app');
const { userOne, admin, insertUsers } = require('../fixtures/user.fixture');
const { userOneAccessToken, adminAccessToken } = require('../fixtures/token.fixture');
const knex = require('../setup');

describe('User routes', () => {
  let newUser;
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
  describe('POST /v1/users', () => {
    test('Should return 201 if user is created', async () => {
      const res = await request(app)
        .post('/v1/users')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(newUser)
        .expect(httpStatus.CREATED);

      const userData = res.body.data;

      expect(userData).toMatchObject({
        userCreated: {
          id: expect.anything(),
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
          createdAt: expect.anything(),
        },
        tokens: expect.any(Object),
      });

      const dbUser = await knex('users').where({ id: userData.userCreated.id }).first();

      expect(dbUser).toBeDefined();

      expect(dbUser).toMatchObject({
        id: expect.anything(),
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        createdAt: expect.anything(),
      });
    });
    test('Should return 400 if email already taken', async () => {
      await knex('users').insert(newUser);

      await request(app)
        .post('/v1/users')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(newUser)
        .expect(httpStatus.BAD_REQUEST);
    });
    test('Should return 400 if no email given', async () => {
      delete newUser.email;

      await request(app)
        .post('/v1/users')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(newUser)
        .expect(httpStatus.BAD_REQUEST);
    });
    test('Should return 400 if no name given', async () => {
      delete newUser.name;

      await request(app)
        .post('/v1/users')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(newUser)
        .expect(httpStatus.BAD_REQUEST);
    });
    test('Should return 400 if no password given', async () => {
      delete newUser.password;

      await request(app)
        .post('/v1/users')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(newUser)
        .expect(httpStatus.BAD_REQUEST);
    });
    test('Should return 404 if token not an admin', async () => {
      await request(app)
        .post('/v1/users')
        .set('Authorization', `Bearer ${userOneAccessToken}`)
        .send(newUser)
        .expect(httpStatus.FORBIDDEN);
    });
    test('Should return 401 if access token is missing', async () => {
      await request(app).post('/v1/users').send(newUser).expect(httpStatus.UNAUTHORIZED);
    });
  });
  describe('GET /v1/users', () => {
    test('Should return 200 and list of users', async () => {
      await request(app).get('/v1/users').set('Authorization', `Bearer ${adminAccessToken}`).expect(httpStatus.OK);
    });
    test('Should return 401 if access token is missing', async () => {
      await request(app).get('/v1/users').expect(httpStatus.UNAUTHORIZED);
    });
    test('Should return 401 if token not an admin', async () => {
      await request(app).get('/v1/users').set('Authorization', `Bearer ${userOneAccessToken}`).expect(httpStatus.FORBIDDEN);
    });
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

const bcrypt = require('bcryptjs');
const { faker } = require('@faker-js/faker');
const { v4 } = require('uuid');
const knex = require('../setup');

const password = 'password1';
const salt = bcrypt.genSaltSync(8);
const hashedPassword = bcrypt.hashSync(password, salt);

const userOne = {
  id: v4(),
  name: faker.person.fullName(),
  email: faker.internet.email().toLowerCase(),
  password: 'password1',
  role: 'user',
  isEmailVerified: false,
};

const userTwo = {
  id: v4(),
  name: faker.person.fullName(),
  email: faker.internet.email().toLowerCase(),
  password,
  role: 'user',
  isEmailVerified: false,
};

const admin = {
  id: v4(),
  name: faker.person.fullName(),
  email: faker.internet.email().toLowerCase(),
  password,
  role: 'admin',
  isEmailVerified: false,
};

const insertUsers = async (users) => {
  // eslint-disable-next-line no-param-reassign
  users = users.map((user) => ({ ...user, password: hashedPassword }));

  await knex('users').insert(users).onConflict('email').ignore();
};

insertUsers([userOne]);

module.exports = {
  userOne,
  userTwo,
  admin,
  insertUsers,
};

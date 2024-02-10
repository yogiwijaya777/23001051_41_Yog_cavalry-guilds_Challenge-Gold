const knex = require('../db/knex');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const bcrypt = require('bcryptjs');

const create = async (body) => {
  body.password = bcrypt.hashSync(body.password, 8);

  const user = await knex('users').insert(body, '*');

  const [userObj] = user;

  return userObj;
};

const getByEmail = async (email) => {
  const user = await knex('users').where({ email }).first();

  return user;
};
const getById = async (id) => {
  const user = await knex('users').where({ id }).first();

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  return user;
};

module.exports = {
  create,
  getByEmail,
  getById,
};

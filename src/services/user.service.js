const knex = require('../db/knex');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

const create = async (body) => {
  const user = knex('users').insert(body, '*');

  return user;
};

const getByEmail = async (email) => {
  const user = knex('users').where({ email }).first();

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  return user;
};

module.exports = {
  create,
  getByEmail,
};

const knex = require('../db/knex');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

const create = async (body) => {
  const user = knex('users').insert(body, '*');

  return user;
};

const getByEmail = async (email) => {
  const user = await knex('users').where({ email });

  if (user.length === 0) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  return user;
};

module.exports = {
  create,
  getByEmail,
};

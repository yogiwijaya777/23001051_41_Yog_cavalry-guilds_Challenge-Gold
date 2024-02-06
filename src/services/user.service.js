const knex = require('../db/knex');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const bcrypt = require('bcryptjs');

const create = async (body) => {
  body.password = bcrypt.hashSync(body.password, 8);

  const user = await knex('users').insert(body, '*');

  const [resultObj] = user;

  return resultObj;
};

const getByEmail = async (email) => {
  const user = await knex('users').where({ email });

  if (user.length === 0) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  const [resultObj] = user;

  return resultObj;
};

module.exports = {
  create,
  getByEmail,
};

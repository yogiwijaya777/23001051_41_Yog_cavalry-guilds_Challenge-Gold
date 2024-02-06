const httpStatus = require('http-status');
const userService = require('./user.service');
const knex = require('../db/knex');
const ApiError = require('../utils/ApiError');
const bcrypt = require('bcryptjs');
const tokenTypes = require('../configs/tokens');

/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */
const loginUserWithEmailAndPassword = async (email, password) => {
  const user = await userService.getByEmail(email);
  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
  }

  return user;
};

const logout = async (refreshToken) => {
  const refreshTokenDoc = await knex('tokens').where({ token: refreshToken, type: 'refresh', blacklisted: false }).first();

  if (!refreshTokenDoc) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Not found');
  }

  await knex('tokens').delete().where({ id: refreshTokenDoc.id });
};

module.exports = {
  loginUserWithEmailAndPassword,
  logout,
};

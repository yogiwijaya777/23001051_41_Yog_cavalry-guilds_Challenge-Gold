const { Strategy: JwtStrategy } = require('passport-jwt');
const httpStatus = require('http-status');
const config = require('./config');
const { tokenTypes } = require('./tokens');
const knex = require('../db/knex');
const ApiError = require('../utils/ApiError');

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies && req.cookies.tokens) {
    token = req.cookies.tokens.access.token;
  }
  return token;
};

const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: cookieExtractor,
};

const jwtVerify = async (payload, done) => {
  try {
    if (payload.type !== tokenTypes.ACCESS) {
      throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid token type');
    }
    const user = await knex('users').where({ id: payload.sub }).first();
    if (!user) {
      return done(null, false);
    }

    done(null, user);
  } catch (error) {
    done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
  jwtStrategy,
};

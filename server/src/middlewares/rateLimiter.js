const rateLimit = require('express-rate-limit');

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  skipSuccessfulRequests: true,
  message: 'Too many accounts created from this IP, please try again after an hour',
  headers: true,
});

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  skipSuccessfulRequests: true,
  message: 'Too many accounts created from this IP, please try again after an hour',
  headers: true,
});

module.exports = {
  authLimiter,
  apiLimiter,
};

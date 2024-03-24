const httpStatus = require('http-status');
const config = require('../configs/config');
const logger = require('../configs/logger');
const ApiError = require('../utils/ApiError');
const { DatabaseError } = require('pg');

const errorConverter = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    // if error from axios or http request
    if (error.response) {
      const message = err.response.data.message || err.response.data;
      const statusCode = error.response.status;

      logger.info('handleAxiosError');
      error = new ApiError(statusCode, message, false, err.stack);
    } else if (err instanceof DatabaseError) {
      // Handling Database Error
      logger.info('handleDatabaseError');
      const statusCode = error.statusCode || 500;
      const message = error.message || httpStatus[statusCode];
      error = new ApiError(statusCode, message, false, err.stack);
    } else {
      // Handling Global Error
      const statusCode = error.statusCode || 500;
      const message = error.message || httpStatus[statusCode];
      error = new ApiError(statusCode, message, false, err.stack);
    }
  }
  next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;
  if (config.env === 'production' && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
    ...(config.env === 'development' && { stack: err.stack }),
  };

  if (config.env === 'development') {
    logger.error(err);
  }

  res.status(statusCode).send(response);
};

module.exports = {
  errorConverter,
  errorHandler,
};

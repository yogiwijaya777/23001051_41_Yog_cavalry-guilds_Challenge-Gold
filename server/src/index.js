const app = require('./app');
const logger = require('./configs/logger');
const config = require('./configs/config');
const knex = require('./db/knex');

let server;
const checkConnect = async () => {
  try {
    await knex.raw('SELECT 1');
    logger.info('PostgreSQL connected');
    server = app.listen(config.port, () => {
      logger.info(`Listening to port ${config.port}`);
    });
  } catch (e) {
    logger.error('PostgreSQL not connected');
  }
};

checkConnect();

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});

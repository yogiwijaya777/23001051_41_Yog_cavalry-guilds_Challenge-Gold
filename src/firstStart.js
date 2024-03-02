const knex = require('./db/knex');
const logger = require('./configs/logger');

const migrate = async () => {
  await knex.migrate.latest();
  logger.info('Database migrated');
};

class mySeedSource {
  seed() {
    return knex.seed.run();
  }
}

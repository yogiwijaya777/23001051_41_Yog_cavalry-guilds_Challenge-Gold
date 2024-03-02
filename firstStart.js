const knex = require('./src/db/knex');
const logger = require('./src/configs/logger');

const migrate = async () => {
  await knex.migrate.latest();
  logger.info('Database migrated');
};

const seeds = async () => {
  await knex.seed.run();
  logger.info('Database seeded');
};

migrate()
  .then(seeds)
  .catch((error) => {
    logger.error(error);
    process.exit(1);
  });

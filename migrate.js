const knex = require('./src/db/knex');

const runMigrations = async () => {
  try {
    await knex.migrate.latest();
    console.log('Migrations completed');
  } catch (error) {
    console.error(error);
  }
};

runMigrations();

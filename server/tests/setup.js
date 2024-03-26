const knex = require('knex');
const config = require('../knexfile').test;

const db = knex(config);

beforeAll(async () => {
  const migrate = async () => {
    await db.migrate.latest();
  };
  const seeds = async () => {
    await db.seed.run();
  };
  migrate()
    .then(seeds)
    .catch(() => {
      process.exit(1);
    });
});

beforeEach(async () => {
  await db('users').del();
  await db('tokens').del();
});

afterAll(async () => {
  await db.raw('DROP SCHEMA IF EXISTS testingDb CASCADE');
  await db.destroy();
});

module.exports = db;

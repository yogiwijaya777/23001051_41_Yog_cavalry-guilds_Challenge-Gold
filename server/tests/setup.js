const knex = require('knex');
const config = require('../knexfile').test;

const db = knex(config);

beforeAll(async () => {
  try {
    await Promise.all([db.migrate.latest()]);
  } catch (err) {
    process.exit(1);
  }
});

beforeEach(async () => {
  await db('favoriteDecks').del();
  await db('follows').del();
  await db('decks').del();
  await db('archetypes').del();
  await db('users').del();
  await db('tokens').del();
});

afterAll(async () => {
  await db.destroy();
});

module.exports = db;

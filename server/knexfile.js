// Update with your config settings.
const config = require('./src/configs/config');
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  test: {
    client: 'pg',
    connection: config.test.CONNECTION_STRING,
    migrations: {
      directory: './src/db/migrations',
    },
    seeds: {
      directory: './src/db/seeds',
    },
  },
};

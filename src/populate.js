const knex = require('./db/knex');

const deleteAllUsers = async () => {
  await knex('users').del();
};

deleteAllUsers();

const bcrypt = require('bcryptjs');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      name: 'Yugi',
      email: 'yugi@example.com',
      password: bcrypt.hashSync('DarkMagician', 8),
      role: 'admin',
    },
    {
      name: 'Yuki',
      email: 'yuki@example.com',
      password: bcrypt.hashSync('EheroNeos', 8),
      role: 'user',
    },
    {
      name: 'Yusei',
      email: 'yusei@example.com',
      password: bcrypt.hashSync('StardastoDoragon', 8),
      role: 'user',
    },
    {
      name: 'User',
      email: 'user@example.com',
      password: bcrypt.hashSync('rahasia1', 8),
      role: 'user',
    },
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('rahasia1', 8),
      role: 'admin',
    },
  ]);
};

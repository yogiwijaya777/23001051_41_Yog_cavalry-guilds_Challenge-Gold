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
      id: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
      name: 'Yami Yugi',
      email: 'yugi@example.com',
      password: bcrypt.hashSync('DarkMagician', 8),
      role: 'admin',
    },
    {
      id: 'a1e98f24-be67-4864-898a-f1b74ce80630',
      name: 'Yuki Judai',
      email: 'yuki@example.com',
      password: bcrypt.hashSync('EheroNeos', 8),
      role: 'user',
    },
    {
      id: 'fc27a26d-ddfe-4b40-9246-e1e495b71dda',
      name: 'Yusei Fudo',
      email: 'yusei@example.com',
      password: bcrypt.hashSync('StardastoDoragon', 8),
      role: 'user',
    },
    {
      id: 'b4ea9401-d7de-4966-9044-c7d004377bc2',
      name: 'User Faedah',
      email: 'user@example.com',
      password: bcrypt.hashSync('rahasia1', 8),
      role: 'user',
    },
    {
      id: 'f5cc52e7-4bd7-4a50-87f2-da6703ce619c',
      name: 'Admin Faedah',
      email: 'admin@example.com',
      password: bcrypt.hashSync('rahasia1', 8),
      role: 'admin',
    },
  ]);
};

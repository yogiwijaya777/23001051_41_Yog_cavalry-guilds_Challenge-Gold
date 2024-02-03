/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('followers', function (table) {
    table.uuid('id').defaultTo(knex.fn.uuid()).primary();
    table.uuid('userId').references('id').inTable('users').onDelete('CASCADE');
    table.uuid('followerId').references('id').inTable('users').onDelete('CASCADE');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('followers');
};

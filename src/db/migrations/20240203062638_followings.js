/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('followings', function (table) {
    table.uuid('id').defaultTo(knex.fn.uuid()).primary();
    table.uuid('userId').references('id').inTable('users').onDelete('CASCADE');
    table.uuid('followingId').references('id').inTable('users').onDelete('CASCADE');
    table.timestamp('createdAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table.timestamp('updatedAt').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('followings');
};

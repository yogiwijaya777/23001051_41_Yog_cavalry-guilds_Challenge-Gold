/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('decks', function (table) {
    table.uuid('id').defaultTo(knex.fn.uuid()).primary();
    table.string('name');
    table.string('description');
    table.uuid('archetypeId').references('id').inTable('archetypes');
    table.uuid('userId').references('id').inTable('users');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('decks');
};

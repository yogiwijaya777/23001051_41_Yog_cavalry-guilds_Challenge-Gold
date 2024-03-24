/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('decks', function (table) {
    table.uuid('id').defaultTo(knex.fn.uuid()).primary();
    table.string('name', 20);
    table.string('description', 1000);
    table.uuid('archetypeId').references('id').inTable('archetypes');
    table.uuid('userId').references('id').inTable('users');
    table.string('imageUrl');
    table.timestamp('createdAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('decks');
};

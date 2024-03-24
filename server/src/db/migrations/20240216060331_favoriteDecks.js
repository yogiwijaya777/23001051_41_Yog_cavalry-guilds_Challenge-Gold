/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('favoriteDecks', function (table) {
    table.uuid('id').defaultTo(knex.fn.uuid()).primary();
    table.uuid('userId').references('id').inTable('users').onDelete('CASCADE');
    table.uuid('deckId').references('id').inTable('decks').onDelete('CASCADE');
    table.timestamp('createdAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('favoriteDecks');
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('archetypes', function (table) {
    table.uuid('id').defaultTo(knex.fn.uuid()).primary();
    table.string('name');
    table.timestamp('createdAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('archetypes');
};

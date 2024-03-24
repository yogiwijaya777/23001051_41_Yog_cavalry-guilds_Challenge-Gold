/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('tokens', function (table) {
    table.uuid('id').defaultTo(knex.fn.uuid()).primary();
    table.string('token', 400);
    table.uuid('userId').references('id').inTable('users').onDelete('CASCADE');
    table.string('type');
    table.dateTime('expires');
    table.boolean('blacklisted').defaultTo(false);
    table.timestamp('createdAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('tokens');
};

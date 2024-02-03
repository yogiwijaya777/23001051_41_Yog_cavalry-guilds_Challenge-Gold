exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.uuid('id').defaultTo(knex.fn.uuid()).primary();
    table.string('name');
    table.string('email').unique();
    table.string('password');
    table.string('role');
    table.boolean('isEmailVerified').defaultTo(false);
    table.timestamps(true, true); // Adds createdAt and updatedAt columns
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};

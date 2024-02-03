exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.uuid('id').defaultTo(knex.fn.uuid()).primary();
    table.string('name');
    table.string('email').unique();
    table.string('password');
    table.string('role').defaultTo('user');
    table.boolean('isEmailVerified').defaultTo(false);
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};

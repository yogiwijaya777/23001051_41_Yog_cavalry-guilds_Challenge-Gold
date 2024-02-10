exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.uuid('id').defaultTo(knex.fn.uuid()).primary();
    table.string('name');
    table.string('email').unique();
    table.string('password');
    table.string('role').defaultTo('user');
    table.boolean('isEmailVerified').defaultTo(false);
    table.timestamp('createdAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};

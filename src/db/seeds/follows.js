/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('follows').del();
  await knex('follows').insert([
    {
      followerId: 'a1e98f24-be67-4864-898a-f1b74ce80630',
      followingId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
    },
    {
      followerId: 'fc27a26d-ddfe-4b40-9246-e1e495b71dda',
      followingId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
    },
    {
      followerId: 'b4ea9401-d7de-4966-9044-c7d004377bc2',
      followingId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
    },
    {
      followerId: 'f5cc52e7-4bd7-4a50-87f2-da6703ce619c',
      followingId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
    },
    {
      followerId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
      followingId: 'a1e98f24-be67-4864-898a-f1b74ce80630',
    },
    {
      followerId: 'fc27a26d-ddfe-4b40-9246-e1e495b71dda',
      followingId: 'a1e98f24-be67-4864-898a-f1b74ce80630',
    },
    {
      followerId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
      followingId: 'fc27a26d-ddfe-4b40-9246-e1e495b71dda',
    },
    {
      followerId: 'a1e98f24-be67-4864-898a-f1b74ce80630',
      followingId: 'fc27a26d-ddfe-4b40-9246-e1e495b71dda',
    },
    {
      followerId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
      followingId: 'b4ea9401-d7de-4966-9044-c7d004377bc2',
    },
    {
      followerId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
      followingId: 'f5cc52e7-4bd7-4a50-87f2-da6703ce619c',
    },
    {
      followerId: 'b4ea9401-d7de-4966-9044-c7d004377bc2',
      followingId: 'f5cc52e7-4bd7-4a50-87f2-da6703ce619c',
    },
    {
      followerId: 'b4ea9401-d7de-4966-9044-c7d004377bc2',
      followingId: 'a1e98f24-be67-4864-898a-f1b74ce80630',
    },
  ]);
};

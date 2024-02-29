/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('favoriteDecks').del();
  await knex('favoriteDecks').insert([
    {
      userId: 'a1e98f24-be67-4864-898a-f1b74ce80630',
      deckId: 'e98ab0fc-ed0f-47e5-85d0-b667d5907400',
    },
    {
      userId: 'fc27a26d-ddfe-4b40-9246-e1e495b71dda',
      deckId: 'e98ab0fc-ed0f-47e5-85d0-b667d5907400',
    },
    {
      userId: 'b4ea9401-d7de-4966-9044-c7d004377bc2',
      deckId: 'e98ab0fc-ed0f-47e5-85d0-b667d5907400',
    },
    {
      userId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
      deckId: 'e98ab0fc-ed0f-47e5-85d0-b667d5907400',
    },
    {
      userId: 'f5cc52e7-4bd7-4a50-87f2-da6703ce619c',
      deckId: 'e98ab0fc-ed0f-47e5-85d0-b667d5907400',
    },
    {
      userId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
      deckId: '3fd63be1-e01d-4d38-95e0-34e0549f5b1b',
    },
    {
      userId: 'a1e98f24-be67-4864-898a-f1b74ce80630',
      deckId: '3fd63be1-e01d-4d38-95e0-34e0549f5b1b',
    },
    {
      userId: 'a1e98f24-be67-4864-898a-f1b74ce80630',
      deckId: '3248b507-88e0-4a8c-afbb-669960031cc6',
    },
    {
      userId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
      deckId: '3248b507-88e0-4a8c-afbb-669960031cc6',
    },
    {
      userId: 'fc27a26d-ddfe-4b40-9246-e1e495b71dda',
      deckId: '3248b507-88e0-4a8c-afbb-669960031cc6',
    },
    {
      userId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
      deckId: '8caf65ec-4934-468c-b505-989d9ed0df02',
    },
  ]);
};

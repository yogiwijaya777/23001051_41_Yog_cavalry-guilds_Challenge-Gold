/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('archetypes').del();
  await knex('archetypes').insert([
    { id: 'ff15bac3-f615-43ac-a9ed-d2a574a2dac2', name: 'Branded' },
    { id: '6e35aa3d-1573-4b56-99c0-3f2dd4d64475', name: 'Exosister' },
    { id: '760efab5-a405-4f96-b31e-98ea6e0b2aa1', name: 'Kashtira 1' },
    { id: '9dfa578e-e6b3-48ff-99ab-972543f4b6c4', name: 'Mannadium' },
    { id: '3b8c3177-e4bb-471a-ac40-18d5f5b97a2c', name: 'Rescue Ace' },
    { id: '109907e7-75e1-4b84-85d6-7e1ff6b1f9a3', name: 'Naturia' },
  ]);
};

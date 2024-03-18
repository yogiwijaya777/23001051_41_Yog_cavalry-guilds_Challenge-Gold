const bcrypt = require('bcryptjs');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('follows').del();
  await knex('favoriteDecks').del();
  await knex('decks').del();
  await knex('archetypes').del();
  await knex('users').del();

  // Insert seed
  await knex('users').insert([
    {
      id: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
      name: 'Yami Yugi',
      email: 'yugi@example.com',
      password: bcrypt.hashSync('DarkMagician', 8),
      role: 'admin',
    },
    {
      id: 'a1e98f24-be67-4864-898a-f1b74ce80630',
      name: 'Yuki Judai',
      email: 'yuki@example.com',
      password: bcrypt.hashSync('EheroNeos', 8),
      role: 'user',
    },
    {
      id: 'fc27a26d-ddfe-4b40-9246-e1e495b71dda',
      name: 'Yusei Fudo',
      email: 'yusei@example.com',
      password: bcrypt.hashSync('StardastoDoragon', 8),
      role: 'user',
    },
    {
      id: 'b4ea9401-d7de-4966-9044-c7d004377bc2',
      name: 'User Faedah',
      email: 'user@example.com',
      password: bcrypt.hashSync('rahasia1', 8),
      role: 'user',
    },
    {
      id: 'f5cc52e7-4bd7-4a50-87f2-da6703ce619c',
      name: 'Admin Faedah',
      email: 'admin@example.com',
      password: bcrypt.hashSync('rahasia1', 8),
      role: 'admin',
    },
  ]);
  await knex('archetypes').insert([
    { id: 'ff15bac3-f615-43ac-a9ed-d2a574a2dac2', name: 'Branded' },
    { id: '6e35aa3d-1573-4b56-99c0-3f2dd4d64475', name: 'Exosister' },
    { id: '760efab5-a405-4f96-b31e-98ea6e0b2aa1', name: 'Kashtira 1' },
    { id: '9dfa578e-e6b3-48ff-99ab-972543f4b6c4', name: 'Mannadium' },
    { id: '3b8c3177-e4bb-471a-ac40-18d5f5b97a2c', name: 'Rescue Ace' },
    { id: '109907e7-75e1-4b84-85d6-7e1ff6b1f9a3', name: 'Naturia' },
  ]);

  await knex('decks').insert([
    {
      id: 'e98ab0fc-ed0f-47e5-85d0-b667d5907400',
      name: 'Exosister Regen',
      description:
        'Deck "Exosister Regen" adalah deck berbasis Spellcaster yang menekankan pemanggilan kembali monster dari graveyard dan pengendalian permainan melalui kartu sihir dan jebakan.',
      archetypeId: '6e35aa3d-1573-4b56-99c0-3f2dd4d64475',
      userId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
      imageUrl: 'https://res.cloudinary.com/dmf8l6plb/image/upload/f_auto,q_auto/v1/cavalry/decks/vzoh3aejly7zghau2xdf',
    },
    {
      id: 'cbfe4713-c553-4d17-b63e-00629e69e5fa',
      name: 'Exo-Handtrap',
      description: '"Exosister Handtrap" deck focuses on Spellcaster monsters and handtrap effects to control the game.',
      archetypeId: '6e35aa3d-1573-4b56-99c0-3f2dd4d64475',
      userId: 'f5cc52e7-4bd7-4a50-87f2-da6703ce619c',
      imageUrl: 'https://res.cloudinary.com/dmf8l6plb/image/upload/f_auto,q_auto/v1/cavalry/decks/vzoh3aejly7zghau2xdf',
    },
    {
      id: '26c50041-6920-4803-9d07-940f0dd927e2',
      name: 'Exosister Tama',
      description: 'Exosister Tama deck focuses on versatile Spellcaster monsters and trap cards to control the game.',
      archetypeId: '6e35aa3d-1573-4b56-99c0-3f2dd4d64475',
      userId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
      imageUrl: 'https://res.cloudinary.com/dmf8l6plb/image/upload/f_auto,q_auto/v1/cavalry/decks/vzoh3aejly7zghau2xdf',
    },
    {
      id: '3fd63be1-e01d-4d38-95e0-34e0549f5b1b',
      name: 'Exosister Menyala',
      description:
        'Exosister Menyala deck emphasizes Spellcaster monsters and flame-based effects to control the game. It utilizes powerful flame-based monsters and spells to disrupt the opponents strategy and gain advantage in battles.',
      archetypeId: '6e35aa3d-1573-4b56-99c0-3f2dd4d64475',
      userId: 'a1e98f24-be67-4864-898a-f1b74ce80630',
      imageUrl: 'https://res.cloudinary.com/dmf8l6plb/image/upload/f_auto,q_auto/v1/cavalry/decks/vzoh3aejly7zghau2xdf',
    },
    {
      id: 'e515685e-8d9a-44f4-be1a-3313eddf4b35',
      name: 'Exosister Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: '6e35aa3d-1573-4b56-99c0-3f2dd4d64475',
      userId: 'a1e98f24-be67-4864-898a-f1b74ce80630',
      imageUrl: 'https://res.cloudinary.com/dmf8l6plb/image/upload/f_auto,q_auto/v1/cavalry/decks/vzoh3aejly7zghau2xdf',
    },
    {
      id: '9601088c-a94f-4122-b902-cc6e9f6f73c3',
      name: 'Menyala abangku',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: 'ff15bac3-f615-43ac-a9ed-d2a574a2dac2',
      userId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
      imageUrl: 'https://res.cloudinary.com/dmf8l6plb/image/upload/v1710724938/cavalry/decks/l4pkq7nbdr972admyqft.png',
    },
    {
      id: '3248b507-88e0-4a8c-afbb-669960031cc6',
      name: 'Ipsumto',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: '3b8c3177-e4bb-471a-ac40-18d5f5b97a2c',
      userId: 'fc27a26d-ddfe-4b40-9246-e1e495b71dda',
      imageUrl: 'https://res.cloudinary.com/dmf8l6plb/image/upload/v1710720999/cavalry/decks/hijpcywmsjo8fws5zsoe.png',
    },
    {
      id: '8caf65ec-4934-468c-b505-989d9ed0df02',
      name: 'Deck Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: '3b8c3177-e4bb-471a-ac40-18d5f5b97a2c',
      userId: 'b4ea9401-d7de-4966-9044-c7d004377bc2',
      imageUrl: 'https://res.cloudinary.com/dmf8l6plb/image/upload/v1710720999/cavalry/decks/hijpcywmsjo8fws5zsoe.png',
    },
    {
      id: '14a79282-5341-44ea-9528-86c51604f47f',
      name: 'Deck Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: '3b8c3177-e4bb-471a-ac40-18d5f5b97a2c',
      userId: 'f5cc52e7-4bd7-4a50-87f2-da6703ce619c',
      imageUrl: 'https://res.cloudinary.com/dmf8l6plb/image/upload/v1710720999/cavalry/decks/hijpcywmsjo8fws5zsoe.png',
    },
    {
      id: '8f8d7a00-3d62-414f-bb65-21b4069417d0',
      name: 'Dolor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: '9dfa578e-e6b3-48ff-99ab-972543f4b6c4',
      userId: 'a1e98f24-be67-4864-898a-f1b74ce80630',
      imageUrl: 'https://res.cloudinary.com/dmf8l6plb/image/upload/v1710720999/cavalry/decks/hijpcywmsjo8fws5zsoe.png',
    },
    {
      id: 'c490bd0a-ec85-41b6-8406-8da2af5711e2',
      name: 'Sit Amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: '9dfa578e-e6b3-48ff-99ab-972543f4b6c4',
      userId: 'fc27a26d-ddfe-4b40-9246-e1e495b71dda',
      imageUrl: 'https://res.cloudinary.com/dmf8l6plb/image/upload/v1710720999/cavalry/decks/hijpcywmsjo8fws5zsoe.png',
    },
    {
      id: 'fcf2b1a6-8d39-4b56-a3a9-8c5430a07066',
      name: 'Consectetur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: '9dfa578e-e6b3-48ff-99ab-972543f4b6c4',
      userId: 'b4ea9401-d7de-4966-9044-c7d004377bc2',
      imageUrl: 'https://res.cloudinary.com/dmf8l6plb/image/upload/v1710720999/cavalry/decks/hijpcywmsjo8fws5zsoe.png',
    },
    {
      id: '8e435ae3-69bd-4277-b0a1-00b10ed278cd',
      name: 'adipiscing elit. Suspendisse varius lectus sed justo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: '9dfa578e-e6b3-48ff-99ab-972543f4b6c4',
      userId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
      imageUrl: 'https://res.cloudinary.com/dmf8l6plb/image/upload/v1710720999/cavalry/decks/hijpcywmsjo8fws5zsoe.png',
    },
    {
      id: 'aea98896-b75d-467a-8fb1-24df5e0be41a',
      name: 'Deck Ipsum 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: '760efab5-a405-4f96-b31e-98ea6e0b2aa1',
      userId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
      imageUrl: 'https://res.cloudinary.com/dmf8l6plb/image/upload/v1710721160/cavalry/decks/ahjucnlnk4vuklsvyovt.png',
    },
    {
      id: '87634e63-35dd-4a44-83ef-ff87bfc082cf',
      name: 'MECHA',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: '760efab5-a405-4f96-b31e-98ea6e0b2aa1',
      userId: 'fc27a26d-ddfe-4b40-9246-e1e495b71dda',
      imageUrl: 'https://res.cloudinary.com/dmf8l6plb/image/upload/v1710721160/cavalry/decks/ahjucnlnk4vuklsvyovt.png',
    },
  ]);
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

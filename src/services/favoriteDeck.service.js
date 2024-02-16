const knex = require('../db/knex');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const checkExist = async ({ doubleCheck, followerId, followingId }) => {
  if (doubleCheck) {
    console.log(doubleCheck);
    const isFavoriteDeckExist = await knex('favoriteDecks')
      .where({ ...doubleCheck })
      .first();

    if (!isFavoriteDeckExist) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Favorite Deck is not exist');
    }
  }

  return;
};

const create = async (user, body) => {
  const data = {
    userId: user.id,
    deckId: body.deckId,
  };

  // Check exist favoriteDeck
  const isFavoriteDeckExist = await knex('favoriteDecks').where(data).first();

  if (isFavoriteDeckExist) {
    throw new ApiError(httpStatus.CONFLICT, 'Favorite Decks already exist');
  }

  const createdFavoriteDecks = await knex('favoriteDecks').insert(data, '*');

  const [resultObj] = createdFavoriteDecks;

  return resultObj;
};

const del = async (user, id) => {
  await checkExist({ doubleCheck: { id: id, userId: user.id } });

  await knex('favoriteDecks').delete().where({ id, userId: user.id });
};

const getFavoriteDecksByUser = async (userId) => {
  // Show Deck Name, Archetype Name
  const favoriteDecks = await knex('favoriteDecks')
    .join('decks', 'favoriteDecks.deckId', '=', 'decks.id')
    .join('archetypes', 'decks.archetypeId', '=', 'archetypes.id')
    .join('users', 'decks.userId', '=', 'users.id')
    .select('decks.id as deckId', 'decks.name as deck', 'archetypes.name as archetype', 'users.name as user')
    .where('favoriteDecks.userId', userId);

  const { totalFavoritedDecks } = await knex('favoriteDecks')
    .count('id', { as: 'totalFavoritedDecks' })
    .where({ userId })
    .first();

  return { favoriteDecks, meta: { totalFavoritedDecks } };
};

module.exports = {
  create,
  del,
  getFavoriteDecksByUser,
};

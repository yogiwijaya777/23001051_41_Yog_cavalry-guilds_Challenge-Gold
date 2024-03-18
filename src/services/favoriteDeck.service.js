const httpStatus = require('http-status');
const knex = require('../db/knex');
const ApiError = require('../utils/ApiError');

const checkExist = async ({ doubleCheck }) => {
  if (doubleCheck) {
    const isFavoriteDeckExist = await knex('favoriteDecks')
      .where({ ...doubleCheck })
      .first();

    if (!isFavoriteDeckExist) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Favorite Deck is not exist');
    }
  }
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
  await checkExist({ doubleCheck: { id, userId: user.id } });

  await knex('favoriteDecks').delete().where({ id, userId: user.id });
};

const getFavoritedDecksByUser = async (userId) => {
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

const getFollowersDeckByDeck = async (deckId) => {
  const followerDecks = await knex('favoriteDecks')
    .join('decks', 'favoriteDecks.deckId', '=', 'decks.id')
    .join('users', 'favoriteDecks.userId', '=', 'users.id')
    .select('users.name as user', 'users.id as userId')
    .where('favoriteDecks.deckId', deckId);

  const { totalFollowersDeck } = await knex('favoriteDecks')
    .count('id', { as: 'totalFollowersDeck' })
    .where({ deckId })
    .first();

  return { followerDecks, meta: { totalFollowersDeck } };
};

module.exports = {
  create,
  del,
  getFavoritedDecksByUser,
  getFollowersDeckByDeck,
};

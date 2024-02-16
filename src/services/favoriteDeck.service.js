const knex = require('../db/knex');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

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

module.exports = {
  create,
};

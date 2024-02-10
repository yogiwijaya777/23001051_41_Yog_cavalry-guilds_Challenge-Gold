const { userService, archetypeService } = require('../services');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const knex = require('../db/knex');

const isUserAndArchetypeExist = async (userId, archetypeId) => {
  const isUserExist = await userService.getById(userId);

  const isArchetypeExist = await archetypeService.getById(archetypeId);
};

const create = async (deck) => {
  const isUserExist = await knex('users').where({ id: deck.userId }).first();
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User is not exist');
  }

  const isArchetypeExist = await knex('archetypes').where({ id: deck.archetypeId }).first();
  if (!isArchetypeExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Archetype are not exist');
  }

  const newDeck = await knex('decks')
    .insert({
      ...deck,
    })
    .returning('*');

  const [resultObj] = newDeck;

  return resultObj;
};

module.exports = {
  create,
};

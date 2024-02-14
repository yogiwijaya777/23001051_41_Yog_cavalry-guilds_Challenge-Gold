const { userService, archetypeService } = require('../services');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const knex = require('../db/knex');

const isDeckExist = async (deckId) => {
  const isDeckExist = await knex('decks').where({ id: deckId }).first();
  if (!isDeckExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Deck is not exist');
  }

  return;
};

const checkExist = async (userId, archetypeId) => {
  if (userId) {
    const isUserExist = await knex('users').where({ id: userId }).first();
    if (!isUserExist) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User is not exist');
    }
  }

  if (archetypeId) {
    const isArchetypeExist = await knex('archetypes').where({ id: archetypeId }).first();
    if (!isArchetypeExist) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Archetype are not exist');
    }
  }

  return;
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

const getById = async (id) => {
  const deck = await knex('decks')
    .join('users', 'decks.userId', '=', 'users.id')
    .join('archetypes', 'decks.archetypeId', '=', 'archetypes.id')
    .select('decks.*', 'archetypes.name as archetypeName', 'users.name as userName')
    .where('decks.id', id)
    .first();

  if (!deck) {
    throw new ApiError(httpStatus.NOT_FOUND, 'deck not found');
  }

  return deck;
};

const update = async (id, body) => {
  await isDeckExist(id);

  const { userId, archetypeId } = body;

  await checkExist(userId, archetypeId);

  const updatedDeck = await knex('decks').update(body).where({ id });

  return updatedDeck;
};

const query = async (filters, options) => {
  const query = knex('decks');

  const { name } = filters;
  const { page, limit, sort, skip } = options;

  if (name) query.where('name', 'ilike', `%${name}%`);

  if (Array.isArray(sort)) {
    sort.forEach((sortParam) => {
      const [sortBy, sortOrder] = sortParam.split(':');
      query.orderBy(sortBy, sortOrder);
    });
  } else if (sort) {
    const [sortBy, sortOrder] = sort.split(':');
    query.orderBy(sortBy, sortOrder);
  }

  query.limit(limit);
  query.offset(skip);

  const decks = await query;

  if (!decks) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Deck not found');
  }

  const countQuery = knex('decks').count('id as count').first();
  if (name) countQuery.where('name', 'ilike', `%${name}%`);

  const { count } = await countQuery;

  return {
    decks,
    meta: {
      currentPage: 1,
      totalPage: Math.ceil(count / limit),
      totalDecks: +count,
    },
  };
};

module.exports = {
  create,
  getById,
  update,
  query,
};

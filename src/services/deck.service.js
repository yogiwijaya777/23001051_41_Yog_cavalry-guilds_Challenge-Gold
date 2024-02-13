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

const queryDecks = async (filters, options) => {
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
  queryDecks,
};

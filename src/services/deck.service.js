const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const knex = require('../db/knex');

const isDeckExist = async ({ deckId, user }) => {
  const query = knex('decks');

  if (deckId && user) {
    query.where({ id: deckId, userId: user.id }).first();
  } else if (deckId) {
    query.where({ id: deckId }).first();
  }

  const result = await query;

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Deck is not exist');
  }
};

const checkExist = async ({ userId, archetypeId }) => {
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
};

const create = async (user, deck) => {
  const isArchetypeExist = await knex('archetypes').where({ id: deck.archetypeId }).first();
  if (!isArchetypeExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Archetype are not exist');
  }

  const newDeck = await knex('decks')
    .insert({
      ...deck,
      userId: user.id,
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

const update = async (user, deckId, updateBody) => {
  await isDeckExist({ deckId, user });

  const { archetypeId } = updateBody;

  if (archetypeId) {
    await checkExist({ archetypeId });
  }

  const updatedDeck = await knex('decks').update(updateBody).where({ id: deckId }).returning('*');

  return updatedDeck;
};

const del = async (user, deckId) => {
  if (user.role !== 'admin') {
    await isDeckExist({ deckId, user });
  } else {
    await isDeckExist({ deckId });
  }

  await knex('decks').delete().where({ id: deckId });
};

const getByUser = async (userId, filters, options) => {
  const query = knex('decks')
    .join('users', 'decks.userId', '=', 'users.id')
    .join('archetypes', 'decks.archetypeId', '=', 'archetypes.id')
    .select('decks.*', 'archetypes.name as archetypeName', 'users.name as userName')
    .where('decks.userId', userId);

  const { name } = filters;
  const { page, limit, sort, skip } = options;

  if (name) query.where('decks.name', 'ilike', `%${name}%`);

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

  const countQuery = knex('decks').where('decks.userId', userId).count('id as count').first();
  if (name) countQuery.where('decks.name', 'ilike', `%${name}%`);

  const { count } = await countQuery;

  return {
    decks,
    meta: {
      currentPage: page,
      totalPage: Math.ceil(count / limit),
      totalDecks: +count,
    },
  };
};

const getDecksByArchetype = async (archetypeId, filters, options) => {
  const query = knex('decks')
    .where({ archetypeId })
    .leftJoin('users', 'decks.userId', '=', 'users.id')
    .leftJoin('archetypes', 'decks.archetypeId', '=', 'archetypes.id')
    .select('decks.*', 'archetypes.name as archetypeName', 'users.name as userName');

  const { name } = filters;
  const { page, limit, sort, skip } = options;

  if (name) query.where('decks.name', 'ilike', `%${name}%`);

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

  const countQuery = knex('decks').count('id as count').where({ archetypeId }).first();
  if (name) countQuery.where('name', 'ilike', `%${name}%`);

  const { count } = await countQuery;

  return {
    decks,
    meta: {
      currentPage: page,
      totalPages: Math.ceil(count / limit),
      totaklDecks: +count,
    },
  };
};

const search = async (filters, options) => {
  const query = knex('decks')
    .join('users', 'decks.userId', '=', 'users.id')
    .join('archetypes', 'decks.archetypeId', '=', 'archetypes.id')
    .select('decks.*', 'archetypes.name as archetypeName', 'users.name as userName');

  const { name } = filters;
  const { page, limit, sort, skip } = options;

  if (name) query.where('decks.name', 'ilike', `%${name}%`);

  if (Array.isArray(sort)) {
    sort.forEach((sortParam) => {
      const [sortBy, sortOrder] = sortParam.split(':');
      query.orderBy(sortBy, sortOrder);
    });
  } else if (sort) {
    const [sortBy, sortOrder] = sort.split(':');
    query.orderBy(sortBy, sortOrder);
  }

  if (limit) query.limit(limit);
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
      currentPage: page,
      totalPage: Math.ceil(count / limit),
      totalDecks: +count,
    },
  };
};

module.exports = {
  create,
  getById,
  update,
  del,
  getByUser,
  getDecksByArchetype,
  search,
};

const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const knex = require('../db/knex');

const checkExist = async ({ archetypeId }) => {
  const archetype = await knex('archetypes').where({ id: archetypeId }).first();
  if (!archetype) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Archetype not found');
  }

  return;
};

const create = async (archetype) => {
  const isArchetypeExist = await knex('archetypes').where({ name: archetype.name }).first();

  if (isArchetypeExist) {
    throw new ApiError(httpStatus.CONFLICT, 'Archetype already exist');
  }

  const newArchetype = await knex('archetypes')
    .insert({
      ...archetype,
    })
    .returning('*');

  const [resultObj] = newArchetype;

  return resultObj;
};
const query = async (filters, options) => {
  const query = knex('archetypes')
    .select('archetypes.*')
    .leftJoin('decks', 'decks.archetypeId', '=', 'archetypes.id')
    .count('decks.id', { as: 'totalDecks' })
    .groupBy('archetypes.id');

  const { name } = filters;
  const { page, limit, sort, skip } = options;

  if (name) query.where('archetypes.name', 'ilike', `%${name}%`);

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

  const archetypes = await query;

  if (!archetypes) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Archetype not found');
  }

  const countQuery = knex('archetypes').count('id as count').first();
  if (name) countQuery.where('name', 'ilike', `%${name}%`);

  const { count } = await countQuery;

  return {
    archetypes,
    meta: {
      currentPage: page,
      totalPages: Math.ceil(count / limit),
      totalArchetypes: +count,
    },
  };
};

const getById = async (archetypeId) => {
  const archetype = await knex('archetypes')
    .select('archetypes.*')
    .leftJoin('decks', 'decks.archetypeId', '=', 'archetypes.id')
    .where({ archetypeId })
    .count('decks.id', { as: 'totalDecks' })
    .groupBy('archetypes.id')
    .first();

  if (!archetype) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Archetype not found');
  }

  return archetype;
};

const del = async (archetypeId) => {
  await checkExist({ archetypeId });

  await knex('archetypes').delete().where({ archetypeId });
};

module.exports = {
  create,
  query,
  getById,
  del,
};

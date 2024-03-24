const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const knex = require('../db/knex');

const checkExist = async ({ archetypeId }) => {
  const archetype = await knex('archetypes').where({ id: archetypeId }).first();
  if (!archetype) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Archetype not found');
  }
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

const getById = async (archetypeId) => {
  const archetype = await knex('archetypes')
    .select('archetypes.*')
    .leftJoin('decks', 'decks.archetypeId', '=', 'archetypes.id')
    .where({ 'archetypes.id': archetypeId })
    .count('decks.id', { as: 'totalDecks' })
    .groupBy('archetypes.id')
    .first();

  if (!archetype) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Archetype not found');
  }

  if (archetype.totalDecks > 0) {
    const decks = await knex('decks')
      .leftJoin('users', 'decks.userId', '=', 'users.id')
      .where({ archetypeId })
      .select('decks.*', 'users.name as username', 'users.id as userId');
    archetype.decks = decks;
  }

  return archetype;
};

const update = async (archetypeId, updateBody) => {
  await checkExist({ archetypeId });

  const updatedArchetype = await knex('archetypes').update(updateBody).where({ id: archetypeId }).returning('*');

  return updatedArchetype;
};

const del = async (archetypeId) => {
  await checkExist({ archetypeId });

  await knex('archetypes').delete().where({ id: archetypeId });
};

const search = async (filters) => {
  const query = knex('archetypes')
    .select('archetypes.*')
    .leftJoin('decks', 'decks.archetypeId', '=', 'archetypes.id')
    .count('decks.id', { as: 'totalDecks' })
    .groupBy('archetypes.id');

  const { name } = filters;

  if (name) query.where('archetypes.name', 'ilike', `%${name}%`);

  const archetypes = await query;

  if (!archetypes) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Archetype not found');
  }

  const countQuery = knex('archetypes').count('id as count').first();
  if (name) countQuery.where('name', 'ilike', `%${name}%`);

  const { count } = await countQuery;

  return {
    archetypes,
  };
};

module.exports = {
  create,
  getById,
  update,
  del,
  search,
};

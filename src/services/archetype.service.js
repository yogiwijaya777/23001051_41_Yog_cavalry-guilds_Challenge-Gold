const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const knex = require('../db/knex');

const create = async (archetype) => {
  const newArchetype = await knex('archetypes')
    .insert({
      ...archetype,
    })
    .returning('*');

  const [resultObj] = newArchetype;

  return resultObj;
};
const queryArchetypes = async () => {
  const archetypes = await knex('archetypes');

  return archetypes;
};

const getById = async (archetypeId) => {
  const archetype = await knex('archetypes').where({ archetypeId }).first();

  if (!archetype) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Archetype not found');
  }

  return archetype;
};

module.exports = {
  create,
  queryArchetypes,
  getById,
};

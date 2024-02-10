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

module.exports = {
  create,
  queryArchetypes,
};

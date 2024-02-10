const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const knex = require('../db/knex');

const create = async (body) => {
  const newArchetype = await knex('archetypes')
    .insert({
      ...body,
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

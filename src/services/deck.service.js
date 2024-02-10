const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const knex = require('../db/knex');

const create = async (body) => {
  const newDeck = await knex('decks')
    .insert({
      ...body,
    })
    .returning('*');

  const [resultObj] = newDeck;

  return resultObj;
};

module.exports = {
  create,
};

const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const knex = require('../db/knex');

const create = async (deck) => {
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

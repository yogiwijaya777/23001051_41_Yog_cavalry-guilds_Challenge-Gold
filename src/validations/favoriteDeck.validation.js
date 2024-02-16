const Joi = require('joi');
const { objectId } = require('./custom.validation');

const create = {
  body: Joi.object().keys({
    deckId: Joi.string().custom(objectId).required(),
  }),
};

const del = {
  params: Joi.object().keys({
    favoriteDeckId: Joi.string().custom(objectId).required(),
  }),
};

const getFavoriteDecksByUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  create,
  del,
  getFavoriteDecksByUser,
};

const Joi = require('joi');
const { objectId } = require('./custom.validation');

const create = {
  body: Joi.object().keys({
    deckId: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  create,
};

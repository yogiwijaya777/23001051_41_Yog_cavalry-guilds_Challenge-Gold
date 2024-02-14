const Joi = require('joi');
const { objectId } = require('./custom.validation');

const create = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    archetypeId: Joi.string().custom(objectId),
    userId: Joi.string().custom(objectId),
  }),
};

const getById = {
  params: Joi.object().keys({
    deckId: Joi.required().custom(objectId),
  }),
};

const update = {
  params: Joi.object().keys({
    deckId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
      description: Joi.string().required(),
      archetypeId: Joi.string().custom(objectId),
    })
    .min(1),
};

module.exports = {
  create,
};

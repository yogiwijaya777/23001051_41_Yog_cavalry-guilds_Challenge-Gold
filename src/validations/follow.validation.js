const Joi = require('joi');
const { objectId } = require('./custom.validation');

const create = {
  body: Joi.object().keys({
    followerId: Joi.string().custom(objectId).required(),
    followingId: Joi.string().custom(objectId).required(),
  }),
};

const del = {
  params: Joi.object().keys({
    followId: Joi.required().custom(objectId),
  }),
};

module.exports = {
  create,
  del,
};

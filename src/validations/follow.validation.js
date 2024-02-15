const Joi = require('joi');
const { objectId } = require('./custom.validation');

const create = {
  body: Joi.object().keys({
    followerId: Joi.string().custom(objectId).required(),
    followingId: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  create,
};

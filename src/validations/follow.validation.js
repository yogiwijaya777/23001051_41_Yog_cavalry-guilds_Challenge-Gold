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
    followId: Joi.required().custom(objectId).required(),
  }),
};

const getFollowers = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId).required(),
  }),
};
const getFollowings = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  create,
  del,
  getFollowers,
  getFollowings,
};

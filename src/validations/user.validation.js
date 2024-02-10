const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const create = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required(),
  }),
};

const getById = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const getByEmail = {
  body: Joi.object().keys({
    email: Joi.string().required(),
  }),
};

module.exports = {
  create,
  getById,
  getByEmail,
};

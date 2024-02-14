const Joi = require('joi');

const create = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const getById = {
  params: Joi.object().keys({
    archetypeId: Joi.string().required(),
  }),
};
const del = {
  params: Joi.object().keys({
    archetypeId: Joi.string().required(),
  }),
};

module.exports = {
  create,
  getById,
  del,
};

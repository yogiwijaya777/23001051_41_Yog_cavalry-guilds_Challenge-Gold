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

const update = {
  params: Joi.object().keys({
    archetypeId: Joi.string().required(),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
    })
    .min(1),
};

const del = {
  params: Joi.object().keys({
    archetypeId: Joi.string().required(),
  }),
};

module.exports = {
  create,
  getById,
  update,
  del,
};

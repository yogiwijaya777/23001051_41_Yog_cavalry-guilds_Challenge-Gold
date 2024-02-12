const knex = require('../db/knex');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const bcrypt = require('bcryptjs');

const create = async (body) => {
  body.password = bcrypt.hashSync(body.password, 8);

  const user = await knex('users').insert(body, '*');

  const [userObj] = user;

  return userObj;
};

const getByEmail = async (email) => {
  const user = await knex('users').where({ email }).first();

  return user;
};
const getById = async (id) => {
  const user = await knex('users').where({ id }).first();

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  return user;
};

const update = async (id, body) => {
  await getById(id);

  const updatedUser = await knex('users').update(body).where({ id }).returning('*');

  return updatedUser;
};

const del = async (id) => {
  await getById(id);

  await knex('users').delete().where({ id });
};

const queryUsers = async (filters, options) => {
  const query = knex('users');

  const { name, role } = filters;
  const { page, limit, sort, skip } = options;

  if (name) query.where('name', 'like', `%${name}%`);
  if (role) query.where('role', 'like', `%${role}%`);

  if (Array.isArray(sort)) {
    sort.forEach((sortParam) => {
      const [sortBy, sortOrder] = sortParam.split(':');
      query.orderBy(sortBy, sortOrder);
    });
  } else if (sort) {
    const [sortBy, sortOrder] = sort.split(':');
    query.orderBy(sortBy, sortOrder);
  }

  query.limit(limit);
  query.offset(skip);

  const users = await query;

  if (!users) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Users not found');
  }

  const countQuery = knex('users').count('id as count').first();
  if (name) countQuery.where('name', 'like', `%${name}%`);
  if (role) countQuery.where('role', 'like', `%${role}%`);
  const { count } = await countQuery;

  return {
    users,
    meta: {
      currentPage: page,
      totalPage: Math.ceil(count / limit),
      totalUsers: +count,
    },
  };
};

module.exports = {
  create,
  queryUsers,
  getByEmail,
  getById,
  update,
  del,
};

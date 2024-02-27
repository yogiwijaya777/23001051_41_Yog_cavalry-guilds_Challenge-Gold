const httpStatus = require('http-status');
const bcrypt = require('bcryptjs');
const knex = require('../db/knex');
const ApiError = require('../utils/ApiError');

const create = async (body) => {
  body.password = bcrypt.hashSync(body.password, 8);

  const user = await knex('users').insert(body, ['id', 'name', 'email', 'createdAt']);

  const [userObj] = user;

  return userObj;
};

const getByEmail = async (email) => {
  const user = await knex('users').where({ email }).first();

  return user;
};
const getById = async (id) => {
  const user = await knex('users').select(['id', 'name', 'email', 'createdAt']).where({ id }).first();

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  return user;
};

const update = async (id, body) => {
  await getById(id);

  const updatedUser = await knex('users').update(body).where({ id }).returning(['id', 'name', 'email', 'createdAt']);

  return updatedUser;
};

const del = async (id) => {
  await getById(id);

  await knex('users').delete().where({ id });
};

const search = async (filters, options) => {
  const query = knex('users').select(['id', 'name', 'email', 'role', 'createdAt']);

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

  await Promise.all(
    users.map(async (user) => {
      const totalFollowersPromise = knex('follows')
        .count('id', { as: 'totalFollowers' })
        .where({ followingId: user.id })
        .first();

      const totalFollowingPromise = knex('follows')
        .count('id', { as: 'totalFollowing' })
        .where({ followerId: user.id })
        .first();

      const [{ totalFollowers }, { totalFollowing }] = await Promise.all([totalFollowersPromise, totalFollowingPromise]);

      user.followers = totalFollowers;
      user.following = totalFollowing;
    })
  );

  const countQuery = knex('users').count('id as count').first();
  if (name) countQuery.where('name', 'ilike', `%${name}%`);
  if (role) countQuery.where('role', 'ilike', `%${role}%`);

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
  search,
  getByEmail,
  getById,
  update,
  del,
};

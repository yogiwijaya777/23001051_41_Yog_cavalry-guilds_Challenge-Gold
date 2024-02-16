const knex = require('../db/knex');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const checkExist = async ({ doubleCheck, followerId, followingId }) => {
  if (doubleCheck) {
    console.log(doubleCheck);
    const isFollowExist = await knex('follows')
      .where({ ...doubleCheck })
      .first();

    if (!isFollowExist) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Follow is not exist');
    }
  }

  if (followingId) {
    const isFollowExist = await knex('follows').where({ followingId }).first();

    if (!isFollowExist) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Follow is not exist');
    }
  }

  return;
};

const create = async (body) => {
  // Check exist follow
  const isFollowExist = await knex('follows').where(body).first();

  if (isFollowExist) {
    throw new ApiError(httpStatus.CONFLICT, 'Follow already exist');
  }

  const createdFollow = await knex('follows').insert(body, '*');

  const [resultObj] = createdFollow;

  return resultObj;
};

const del = async (user, id) => {
  await checkExist({ doubleCheck: { id: id, followerId: user.id } });

  await knex('follows').delete().where({ id });
};

const getFollowers = async (userId) => {
  const followers = await knex('follows').where({ followingId: userId });

  if (!followers) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Followers not found');
  }

  const { totalFollowers } = await knex('follows')
    .count('id', { as: 'totalFollowers' })
    .where({ followingId: userId })
    .first();

  return {
    followers,
    meta: {
      totalFollowers,
    },
  };
};

module.exports = {
  create,
  del,
  getFollowers,
};

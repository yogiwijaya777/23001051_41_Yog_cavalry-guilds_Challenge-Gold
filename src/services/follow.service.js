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

const create = async (user, body) => {
  const data = {
    followerId: user.id,
    followingId: body.followingId,
  };

  // Check exist follow
  const isFollowExist = await knex('follows').where(data).first();

  if (isFollowExist) {
    throw new ApiError(httpStatus.CONFLICT, 'Follow already exist');
  }

  const createdFollow = await knex('follows').insert(data, '*');

  const [resultObj] = createdFollow;

  return resultObj;
};

const del = async (user, id) => {
  await checkExist({ doubleCheck: { id: id, followerId: user.id } });

  await knex('follows').delete().where({ id });
};

const getFollowers = async (userId) => {
  const followers = await knex('follows')
    .join('users', 'follows.followerId', '=', 'users.id')
    .select('users.id', 'users.name')
    .where({ followingId: userId });

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
const getFollowings = async (userId) => {
  const followings = await knex('follows')
    .join('users', 'follows.followingId', '=', 'users.id')
    .select('users.id', 'users.name')
    .where({ followerId: userId });

  const { totalFollowings } = await knex('follows')
    .count('id', { as: 'totalFollowings' })
    .where({ followerId: userId })
    .first();

  return {
    followings,
    meta: {
      totalFollowings,
    },
  };
};

module.exports = {
  create,
  del,
  getFollowers,
  getFollowings,
};

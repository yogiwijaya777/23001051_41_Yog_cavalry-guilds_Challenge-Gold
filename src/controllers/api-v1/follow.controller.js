const httpStatus = require('http-status');
const { followService } = require('../../services');
const catchAsync = require('../../utils/catchAsync');
const ApiError = require('../../utils/ApiError');

const create = catchAsync(async (req, res) => {
  if (req.user.id === req.body.followingId) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'You cannot follow yourself');
  }

  const followCreated = await followService.create(req.user, req.body);

  res.status(httpStatus.CREATED).json({
    status: httpStatus.CREATED,
    message: 'Follow Created',
    data: followCreated,
  });
});

const del = catchAsync(async (req, res) => {
  await followService.del(req.user, req.params.followId);

  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: 'Delete Follow Success',
  });
});

const getFollowers = catchAsync(async (req, res) => {
  const results = await followService.getFollowers(req.params.userId);

  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: 'Get Followers Success',
    data: results.followers,
    meta: results.meta,
  });
});
const getFollowings = catchAsync(async (req, res) => {
  const results = await followService.getFollowings(req.params.userId);

  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: 'Get Followings Success',
    data: results.followings,
    meta: results.meta,
  });
});

module.exports = {
  create,
  del,
  getFollowers,
  getFollowings,
};

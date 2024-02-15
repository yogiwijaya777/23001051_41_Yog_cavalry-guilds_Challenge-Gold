const { followService } = require('../services');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');

const create = catchAsync(async (req, res) => {
  if (req.user.id !== req.body.followerId) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Follower ID Must Be Equal To Your ID');
  }

  if (req.user.id === req.body.followingId) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'You cannot follow yourself');
  }

  const followCreated = await followService.create(req.body);

  res.status(httpStatus.CREATED).json({
    status: httpStatus.CREATED,
    message: 'Follow Created',
    data: followCreated,
  });
});

module.exports = {
  create,
};

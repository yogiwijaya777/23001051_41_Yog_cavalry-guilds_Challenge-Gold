const { userService, tokenService } = require('../services');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');

const create = catchAsync(async (req, res) => {
  const existingEmail = await userService.getByEmail(req.body.email);

  if (existingEmail) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already exists');
  }

  const userCreated = await userService.create(req.body);

  const tokens = await tokenService.generateAuthTokens(userCreated);

  res.status(httpStatus.CREATED).json({
    status: httpStatus.CREATED,
    message: 'Register Success',
    data: { userCreated, tokens },
  });
});

const getById = catchAsync(async (req, res) => {
  const user = await userService.getById(req.params.userId);

  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: 'Get User By Id Success',
    data: user,
  });
});

const getByEmail = catchAsync(async (req, res) => {
  const user = await userService.getByEmail(req.body.email);

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: 'Get User By Email Success',
    data: user,
  });
});

module.exports = {
  create,
  getById,
  getByEmail,
};

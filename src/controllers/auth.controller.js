const { userService } = require('../services');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');

const register = catchAsync(async (req, res) => {
  const existingEmail = userService.getByEmail(req.body.email);

  if (existingEmail) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already exists');
  }

  const user = await userService.create(req.body);

  res.status(httpStatus.CREATED).json({
    code: '201',
    status: 'CREATED',
    message: 'user created successfully',
    data: [user],
  });
});

module.exports = {
  register,
};

const httpStatus = require('http-status');
const { userService, tokenService, authService } = require('../../services');
const config = require('../../configs/config');
const catchAsync = require('../../utils/catchAsync');
const ApiError = require('../../utils/ApiError');

const register = catchAsync(async (req, res) => {
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

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);

  delete user.password;

  const tokens = await tokenService.generateAuthTokens(user);

  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: 'Login Success',
    data: { user, tokens },
  });
});

const logout = catchAsync(async (req, res) => {
  await authService.logout(req.headers.authorization.split(' ')[1]);

  req.user = null;

  res.status(httpStatus.OK).send();
});

const refreshTokens = catchAsync(async (req, res) => {
  const tokens = await authService.refreshAuth(req.headers.authorization.split(' ')[1]);
  res.send({ ...tokens });
});

module.exports = {
  register,
  login,
  logout,
  refreshTokens,
};

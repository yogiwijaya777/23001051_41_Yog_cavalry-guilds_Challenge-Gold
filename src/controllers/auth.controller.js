const { userService, tokenService, authService } = require('../services');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');

const register = catchAsync(async (req, res) => {
  try {
    await userService.getByEmail(req.body.email);

    // if getByEmail not throw error then email already exists
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already exists');
  } catch (error) {
    if (error.message === 'User not found') {
      // Lanjutkan proses registrasi karena email belum ada
      const userCreated = await userService.create(req.body);

      const tokens = await tokenService.generateAuthTokens(userCreated);

      res.status(httpStatus.CREATED).json({
        status: httpStatus.CREATED,
        message: 'Register Success',
        data: { userCreated, tokens },
      });
    } else {
      throw error; // Melempar kembali kesalahan yang tidak terduga
    }
  }
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);

  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: 'Login Success',
    data: { user, tokens },
  });
});

module.exports = {
  register,
  login,
};

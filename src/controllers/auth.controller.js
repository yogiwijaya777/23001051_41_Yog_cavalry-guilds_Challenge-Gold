const { userService, tokenService } = require('../services');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const { error } = require('winston');

const register = catchAsync(async (req, res) => {
  try {
    console.log(req.body.email);
    await userService.getByEmail(req.body.email);

    // if getByEmail not throw error then email already exists
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already exists');
  } catch (error) {
    if (error.message === 'User not found') {
      // Lanjutkan proses registrasi karena email belum ada
      const userCreated = await userService.create(req.body);
      const tokens = await tokenService.generateAuthTokens(userCreated);

      res.status(httpStatus.CREATED).send({
        status: httpStatus.CREATED,
        message: 'Register Success',
        data: { userCreated, tokens },
      });
    } else {
      throw error; // Melempar kembali kesalahan yang tidak terduga
    }
  }
});

module.exports = {
  register,
};

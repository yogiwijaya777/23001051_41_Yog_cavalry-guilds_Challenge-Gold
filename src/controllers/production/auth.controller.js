const catchAsync = require('../../utils/catchAsync');

const register = catchAsync(async (req, res) => {
  res.render('auth/register.pug');
});

const login = catchAsync(async (req, res) => {
  res.render('auth/login.pug');
});

module.exports = { register, login };

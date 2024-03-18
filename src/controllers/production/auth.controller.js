const catchAsync = require('../../utils/catchAsync');

const register = catchAsync(async (req, res) => {
  res.render('auth/register', { title: 'Register' });
});

const login = catchAsync(async (req, res) => {
  res.render('auth/login.pug', { title: 'Log in' });
});

module.exports = { register, login };

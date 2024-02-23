const catchAsync = require('../../utils/catchAsync');

const register = catchAsync(async (req, res) => {
  res.render('auth/register.pug');
});

module.exports = { register };

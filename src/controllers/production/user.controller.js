const catchAsync = require('../../utils/catchAsync');

const gets = catchAsync(async (req, res) => {
  res.render('users/user', { title: 'Users' });
});

const getById = catchAsync(async (req, res) => {
  res.render('users/singleUser', { title: 'User' });
});

module.exports = {
  gets,
  getById,
};

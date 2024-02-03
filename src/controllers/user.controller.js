const catchAsync = require('../utils/catchAsync');

const user = [];

const create = catchAsync(async (req, res) => {
  const id = user.length + 1;
  user.push({ id, ...req.body });
  res.status(201).json({
    code: '201',
    status: 'CREATED',
    message: 'user created successfully',
    data: [user],
    page: {
      total: user.length,
    },
  });
});

const querysUser = catchAsync(async (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'users retrieved successfully',
    data: user,
  });
});

// How to send Erorr
/* Code : 400,
Status : BAD REQUEST,
Error : {
  Authorization : Please Authenticate
}*/

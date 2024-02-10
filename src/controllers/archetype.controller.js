const { archetypeService } = require('../services');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');

const create = catchAsync(async (req, res) => {
  const archetypeCreated = await archetypeService.create(req.body);

  res.status(httpStatus.CREATED).json({
    status: httpStatus.CREATED,
    message: 'Archetype Created',
    data: archetypeCreated,
  });
});

const queryArchetypes = catchAsync(async (req, res) => {
  const archetypes = await archetypeService.queryArchetypes();

  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: 'Get All Archetypes Success',
    data: archetypes,
  });
});

module.exports = {
  create,
  queryArchetypes,
};

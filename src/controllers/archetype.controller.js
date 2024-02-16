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

const getById = catchAsync(async (req, res) => {
  const archetype = await archetypeService.getById(req.params.archetypeId);

  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: 'Get Archetype By Id Success',
    data: archetype,
  });
});

const update = catchAsync(async (req, res) => {
  const archetypeUpdated = await archetypeService.update(req.params.archetypeId, req.body);

  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: 'Update Archetype Success',
    data: archetypeUpdated,
  });
});

const del = catchAsync(async (req, res) => {
  await archetypeService.del(req.params.archetypeId);

  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: 'Delete Archetype Success',
  });
});

const search = catchAsync(async (req, res) => {
  const { name, page, limit, sort } = req.query;
  const filters = {
    name,
  };

  const options = {
    page: Number(page) || 1,
    limit: Number(limit) || 10,
    sort,
  };
  options.skip = (options.page - 1) * options.limit;

  const results = await archetypeService.search(filters, options);

  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: 'Get All Archetypes Success',
    data: results.archetypes,
    meta: results.meta,
  });
});

module.exports = {
  create,
  getById,
  update,
  del,
  search,
};

const { deckService } = require('../services');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');

const create = catchAsync(async (req, res) => {
  const deckCreated = await deckService.create(req.body);

  res.status(httpStatus.CREATED).json({
    status: httpStatus.CREATED,
    message: 'Deck Created',
    data: deckCreated,
  });
});

const getById = catchAsync(async (req, res) => {
  const deck = await deckService.getById(req.params.deckId);

  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: 'Get Deck By Id Success',
    data: deck,
  });
});

const query = catchAsync(async (req, res) => {
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

  const results = await deckService.query(filters, options);

  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: 'Get All Decks Success',
    data: results.decks,
    meta: results.meta,
  });
});

module.exports = {
  create,
  getById,
  query,
};

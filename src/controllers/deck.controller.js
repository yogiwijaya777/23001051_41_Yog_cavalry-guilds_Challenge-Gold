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

const queryDecks = catchAsync(async (req, res) => {
  const decks = await deckService.queryDecks();

  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: 'Get All Decks Success',
    data: decks,
  });
});

module.exports = {
  create,
  queryDecks,
};

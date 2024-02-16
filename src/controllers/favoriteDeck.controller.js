const { favoriteDeckService } = require('../services');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

const create = catchAsync(async (req, res) => {
  const favoriteDecksCreated = await favoriteDeckService.create(req.user, req.body);

  res.status(httpStatus.CREATED).json({
    status: httpStatus.CREATED,
    message: 'Favorite Decks Created',
    data: favoriteDecksCreated,
  });
});

const del = catchAsync(async (req, res) => {
  await favoriteDeckService.del(req.user, req.params.favoriteDeckId);

  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: 'Delete Favorite Decks Success',
  });
});

const getFavoriteDecksByUser = catchAsync(async (req, res) => {
  const favoriteDecks = await favoriteDeckService.getFavoriteDecksByUser(req.params.userId);

  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: 'Get Favorite Decks By User Success',
    data: favoriteDecks,
  });
});

module.exports = {
  create,
  del,
  getFavoriteDecksByUser,
};

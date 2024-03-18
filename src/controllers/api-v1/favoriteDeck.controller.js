const httpStatus = require('http-status');
const { favoriteDeckService } = require('../../services');
const catchAsync = require('../../utils/catchAsync');

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

const getFavoritedDecksByUser = catchAsync(async (req, res) => {
  const results = await favoriteDeckService.getFavoritedDecksByUser(req.params.userId);

  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: 'Get Favorited Decks By User Success',
    data: results.favoriteDecks,
    meta: results.meta,
  });
});

const getFollowersDeckByDeck = catchAsync(async (req, res) => {
  const results = await favoriteDeckService.getFollowersDeckByDeck(req.params.deckId);

  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: 'Get Followers Deck By Deck Success',
    data: results.followerDecks,
    meta: results.meta,
  });
});

module.exports = {
  create,
  del,
  getFavoritedDecksByUser,
  getFollowersDeckByDeck,
};

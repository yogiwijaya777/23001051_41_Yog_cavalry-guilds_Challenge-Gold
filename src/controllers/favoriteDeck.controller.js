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

module.exports = {
  create,
};

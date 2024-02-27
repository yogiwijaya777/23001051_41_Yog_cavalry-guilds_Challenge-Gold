const catchAsync = require('../../utils/catchAsync');

const getById = catchAsync(async (req, res) => {
  res.render('decks/singleDeck', { title: 'Deck' });
});

const gets = catchAsync(async (req, res) => {
  res.render('decks/deck', { title: 'Decks' });
});

module.exports = {
  getById,
  gets,
};

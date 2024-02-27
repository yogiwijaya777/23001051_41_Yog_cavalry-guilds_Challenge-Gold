const catchAsync = require('../../utils/catchAsync');

const getById = catchAsync(async (req, res) => {
  res.render('decks/singleDeck', { title: 'Deck List' });
});

const gets = catchAsync(async (req, res) => {
  res.render('decks/deck', { title: 'Deck' });
});

module.exports = {
  getById,
  gets,
};

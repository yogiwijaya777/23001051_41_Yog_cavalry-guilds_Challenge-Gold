const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { deckValidation, favoriteDeckValidation } = require('../../validations');
const deckController = require('../../controllers/deck.controller');
const favoriteDeckController = require('../../controllers/favoriteDeck.controller');

const router = express.Router();

router.route('/').post(auth(), validate(deckValidation.create), deckController.create).get(auth(), deckController.query);

router
  .route('/:deckId')
  .get(auth(), validate(deckValidation.getById), deckController.getById)
  .patch(auth(), validate(deckValidation.update), deckController.update)
  .delete(auth(), validate(deckValidation.del), deckController.del);

router
  .route('/:deckId/followers')
  .get(auth(), validate(favoriteDeckValidation.getFollowersDeckByDeck), favoriteDeckController.getFollowersDeckByDeck);
module.exports = router;

const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { favoriteDeckValidation } = require('../../validations');
const favoriteDeckController = require('../../controllers/api-v1/favoriteDeck.controller');

const router = express.Router();

router.route('/').post(auth(), validate(favoriteDeckValidation.create), favoriteDeckController.create);

router.route('/:favoriteDeckId').delete(auth(), validate(favoriteDeckValidation.del), favoriteDeckController.del);

router
  .route('/:deckId/:userId')
  .get(auth(), validate(favoriteDeckValidation.getbyDeckAndUser), favoriteDeckController.getbyDeckAndUser);

module.exports = router;

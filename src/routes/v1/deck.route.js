const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { deckValidation } = require('../../validations');
const deckController = require('../../controllers/deck.controller');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(deckValidation.create), deckController.create)
  .get(auth(), deckController.queryDecks);

module.exports = router;

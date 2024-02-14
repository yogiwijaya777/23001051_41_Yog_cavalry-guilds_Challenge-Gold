const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { deckValidation } = require('../../validations');
const deckController = require('../../controllers/deck.controller');

const router = express.Router();

router.route('/').post(auth(), validate(deckValidation.create), deckController.create).get(auth(), deckController.query);

router
  .route('/:deckId')
  .get(auth(), validate(deckValidation.getById), deckController.getById)
  .patch(auth(), validate(deckValidation.update), deckController.update)
  .delete(auth(), validate(deckValidation.del), deckController.del);

module.exports = router;

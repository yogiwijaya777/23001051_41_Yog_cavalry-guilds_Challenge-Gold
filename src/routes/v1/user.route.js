const express = require('express');
const userController = require('../../controllers/user.controller');
const deckController = require('../../controllers/deck.controller');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { userValidation, deckValidation } = require('../../validations');
const router = express.Router();

router
  .route('/')
  .post(validate(userValidation.create), userController.create)
  .get(auth('getUsers'), userController.queryUsers);

router
  .route('/:userId')
  .get(auth('getUsers'), validate(userValidation.getById), userController.getById)
  .patch(auth('manageUsers'), validate(userValidation.update), userController.update)
  .delete(auth('manageUsers'), validate(userValidation.del), userController.del);

router.route('/:userId/decks').get(auth(), validate(deckValidation.getByUser), deckController.getByUser);
module.exports = router;

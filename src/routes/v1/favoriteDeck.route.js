const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { favoriteDeckValidation } = require('../../validations');
const favoriteDeckController = require('../../controllers/favoriteDeck.controller');

const router = express.Router();

router.route('/').post(auth(), validate(favoriteDeckValidation.create), favoriteDeckController.create);

module.exports = router;

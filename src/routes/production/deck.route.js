const express = require('express');
const isUserLoggedIn = require('../../middlewares/isUserLoggedIn');
const deckController = require('../../controllers/production/deck.controller');

const router = express.Router();

router.use(isUserLoggedIn());

router.route('/').get(deckController.gets);

router.route('/:deckId').get(deckController.getById);

module.exports = router;

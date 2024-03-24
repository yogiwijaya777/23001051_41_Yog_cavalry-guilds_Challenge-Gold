const express = require('express');
const isUserLoggedIn = require('../../middlewares/isUserLoggedIn');
const archetypeController = require('../../controllers/production/archetype.controller');

const router = express.Router();

router.use(isUserLoggedIn());

router.route('/').get(archetypeController.gets);

router.route('/:archetypeId').get(archetypeController.getById);

module.exports = router;

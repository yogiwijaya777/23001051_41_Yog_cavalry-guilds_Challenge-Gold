const express = require('express');
const isUserLoggedIn = require('../../middlewares/isUserLoggedIn');

const userController = require('../../controllers/production/user.controller');

const router = express.Router();

router.use(isUserLoggedIn());

router.route('/').get(userController.gets);

router.route('/:userId').get(userController.getById);

module.exports = router;

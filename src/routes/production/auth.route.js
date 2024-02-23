const express = require('express');
const authController = require('../../controllers/production/auth.controller');

const router = express.Router();

router.route('/register').get(authController.register);

module.exports = router;

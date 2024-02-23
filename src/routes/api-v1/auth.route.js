const express = require('express');
const validate = require('../../middlewares/validate');
const authValidation = require('../../validations/auth.validation');
const authController = require('../../controllers/api-v1/auth.controller');

const router = express.Router();

router.route('/register').post(validate(authValidation.register), authController.register);
router.route('/login').post(validate(authValidation.login), authController.login);
router.route('/logout').post(validate(authValidation.logout), authController.logout);
router.route('/refresh-tokens').post(validate(authValidation.refreshTokens), authController.refreshTokens);

module.exports = router;

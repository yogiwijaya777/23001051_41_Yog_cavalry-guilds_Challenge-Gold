const express = require('express');
const validate = require('../../middlewares/validate');
const authValidation = require('../../validations/auth.validation');
const authController = require('../../controllers/auth.controller');

const router = express.Router();

router.route('/register').post(validate(authValidation.register), authController.register);
router.route('/login').post(validate(authValidation.login), authController.login);
router.post('/logout', validate(authValidation.logout), authController.logout);
router.post('refresh-tokens', validate(authValidation.refreshTokens), authController.refreshTokens);

module.exports = router;

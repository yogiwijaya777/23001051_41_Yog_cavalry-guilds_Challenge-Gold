const express = require('express');
const userController = require('../../controllers/user.controller');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { userValidation } = require('../../validations');
const router = express.Router();

router.route('/').post(auth('manageUsers'), validate(userValidation.create), userController.create);

router.route('/:userId').get(auth(), validate(userValidation.getById), userController.getById);
module.exports = router;

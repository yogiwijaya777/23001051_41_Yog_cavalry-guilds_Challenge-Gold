const express = require('express');
const userController = require('../../controllers/user.controller');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { userValidation } = require('../../validations');
const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(userValidation.create), userController.create)
  .get(auth('getUsers'), userController.queryUsers);

router.route('/:userId').get(auth('getUsers'), validate(userValidation.getById), userController.getById);
module.exports = router;

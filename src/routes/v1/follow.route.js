const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { followValidation } = require('../../validations');
const followController = require('../../controllers/follow.controller');

const router = express.Router();

router.route('/').post(auth(), validate(followValidation.create), followController.create);

router.route('/:followId').delete(auth(), validate(followValidation.del), followController.del);
module.exports = router;

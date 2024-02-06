const express = require('express');
const userController = require('../../controllers/user.controller');
const router = express.Router();

router.route('/').post(userController.create).get(userController.getAlls);

router.route('/:id').get(userController.get).patch(userController.update).delete(userController.del);

module.exports = router;

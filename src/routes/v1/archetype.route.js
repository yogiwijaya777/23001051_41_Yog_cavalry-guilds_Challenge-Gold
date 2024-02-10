const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { archetypeValidation } = require('../../validations');
const archetypeController = require('../../controllers/archetype.controller');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(archetypeValidation.create), archetypeController.create)
  .get(auth(), archetypeController.queryArchetypes);

module.exports = router;

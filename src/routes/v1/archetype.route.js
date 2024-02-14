const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { archetypeValidation } = require('../../validations');
const archetypeController = require('../../controllers/archetype.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageArchetypes'), validate(archetypeValidation.create), archetypeController.create)
  .get(auth(), archetypeController.query);

router
  .route('/:archetypeId')
  .get(auth(), validate(archetypeValidation.getById), archetypeController.getById)
  .delete(auth('manageArchetypes'), validate(archetypeValidation.del), archetypeController.del);

module.exports = router;

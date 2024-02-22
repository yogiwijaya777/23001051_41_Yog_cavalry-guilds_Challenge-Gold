const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { archetypeValidation, deckValidation } = require('../../validations');
const archetypeController = require('../../controllers/archetype.controller');
const deckController = require('../../controllers/deck.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageArchetypes'), validate(archetypeValidation.create), archetypeController.create)
  .get(auth(), archetypeController.search);

router
  .route('/:archetypeId')
  .get(auth(), validate(archetypeValidation.getById), archetypeController.getById)
  .patch(auth('manageArchetypes'), validate(archetypeValidation.update), archetypeController.update)
  .delete(auth('manageArchetypes'), validate(archetypeValidation.del), archetypeController.del);

router
  .route('/:archetypeId/decks')
  .get(auth(), validate(deckValidation.getDecksByArchetype), deckController.getDecksByArchetype);

module.exports = router;

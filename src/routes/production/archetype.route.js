const express = require('express');
const isUserLoggedIn = require('../../middlewares/isUserLoggedIn');

const router = express.Router();

router.use(isUserLoggedIn());

router.route('/').get((req, res) => {
  res.render('archetypes/archetype', { title: 'Archetypes' });
});

router.route('/:archetypeId').get((req, res) => {
  res.render('archetypes/singleArchetype', { title: 'Archetype' });
});

module.exports = router;

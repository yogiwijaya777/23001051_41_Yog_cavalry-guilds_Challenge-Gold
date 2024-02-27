const express = require('express');

const router = express.Router();

const overviewRoute = require('./overview.route');
const authRoute = require('./auth.route');
const archetypeRoute = require('./archetype.route');
const deckRoute = require('./deck.route');
const userRoute = require('./user.route');

const defaultRoutes = [
  {
    path: '/',
    route: overviewRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/archetypes',
    route: archetypeRoute,
  },
  {
    path: '/decks',
    route: deckRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;

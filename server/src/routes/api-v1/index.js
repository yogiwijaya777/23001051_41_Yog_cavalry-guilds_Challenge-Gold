const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const archetypeRoute = require('./archetype.route');
const deckRoute = require('./deck.route');
const followRoute = require('./follow.route');
const favoriteDeckRoute = require('./favoriteDeck.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
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
    path: '/follows',
    route: followRoute,
  },
  {
    path: '/favorite-decks',
    route: favoriteDeckRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;

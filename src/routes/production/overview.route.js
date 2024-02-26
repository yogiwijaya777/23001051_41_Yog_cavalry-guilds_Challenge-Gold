const express = require('express');
const isUserLoggedIn = require('../../middlewares/isUserLoggedIn');

const router = express.Router();

router.route('/').get(isUserLoggedIn(), (req, res) => {
  res.render('base', { title: 'The Greate One' });
});

module.exports = router;

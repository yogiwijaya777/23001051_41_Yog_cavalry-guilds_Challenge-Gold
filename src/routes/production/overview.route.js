const express = require('express');
const isUserLoggedIn = require('../../middlewares/isUserLoggedIn');

const router = express.Router();

router.route('/').get(isUserLoggedIn(), (req, res) => {
  res.render('overview', { title: 'The Greate One' });
});

module.exports = router;

const express = require('express');

const router = express.Router();

router.route('/register').get((req, res) => {
  res.render('auth/register.hbs');
});

module.exports = router;

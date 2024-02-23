const express = require('express');

const router = express.Router();

router.route('/register').get((req, res) => {
  res.render('auth/register.pug', { layout: false });
});

module.exports = router;

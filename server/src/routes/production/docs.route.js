const express = require('express');

const router = express.Router();

router.route('/auth').get((req, res) => {
  res.render('docs/auth', { title: 'Auth Documentation' });
});

module.exports = router;

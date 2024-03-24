const passport = require('passport');

const verifyCallback = (req, res, resolve) => async (err, user) => {
  res.locals.user = user;
  req.user = user;

  resolve();
};

const isUserLoggedIn = () => async (req, res, next) => {
  return new Promise((resolve) => {
    passport.authenticate('jwt', { session: false }, verifyCallback(req, res, resolve))(req, res, next);
  })
    .then(() => next())
    .catch((err) => next(err));
};

module.exports = isUserLoggedIn;

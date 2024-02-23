const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const path = require('path');
const compression = require('compression');
const cors = require('cors');
const passport = require('passport');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const httpStatus = require('http-status');
const config = require('./configs/config');
const morgan = require('./configs/morgan');
const { jwtStrategy } = require('./configs/passport');
const { authLimiter } = require('./middlewares/rateLimiter');
const apiRoutes = require('./routes/api-v1/index');
const routes = require('./routes/production/index');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set views
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '..', 'views'));
app.use(express.static(path.join(__dirname, '..', 'public')));

// set security HTTP headers
app.use(helmet());

// setup body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// limit repeated failed requests to auth endpoints
if (config.env === 'production') {
  app.use('/v1/auth', authLimiter);
}

app.get('/', (req, res) => {
  res.render('base', { slogan: 'The Greate One' });
});

// v1 api routes
app.use('/v1', apiRoutes);

// production routes
app.use('/', routes);

if (config.env === 'development') {
  const swaggerDocument = YAML.load('./cavalry-guilds-docs.yaml');
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;

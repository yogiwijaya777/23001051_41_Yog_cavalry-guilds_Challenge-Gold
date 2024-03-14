# Cavalry Guilds

This project will help Member Management, Deck Data Tracking, and for more helpful references for building deck things on Yu-Gi-Oh!.

## Installation

Clone the project :

```bash
https://github.com/yogiwijaya777/23001051_41_Yog_cavalry-guilds_Challenge-Gold.git
cd 23001051_41_Yog_cavalry-guilds_Challenge-Gold
```

Install the depedencies with npm :

```bash
npm install

# You need to install CRA modules at client\ folder
cd client\

npm i 

```

Set the environment variables :

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

## Table of Contents

- [Features](#features)
- [Commands](#commands)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Error Handling](#error-handling)
- [Validation](#validation)
- [Authentication](#authentication)
- [Authorization](#authorization)
- [Logging](#logging)
- [Linting](#linting)

## Features

- **SQL database**: [PostgreSQL](https://www.postgresql.org) object relation mapping using [Knexjs](https://knexjs.org)
- **Authentication and authorization**: using [passport](http://www.passportjs.org)
- **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
- **Logging**: using [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)
- **Testing**: unit and integration tests using [Jest](https://jestjs.io)
- **Error handling**: centralized error handling mechanism
- **API documentation**: with [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) and [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io)
- **Santizing**: sanitize request data against xss and query injection
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Compression**: gzip compression with [compression](https://github.com/expressjs/compression)
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- **Editor config**: consistent editor configuration using [EditorConfig](https://editorconfig.org)

## Commands

Running locally:

Install the depedencies with npm :

```bash
npm install

# You need to install CRA modules to at client\ folder
cd client\

npm i 

```

Database Migrations and Seedings :

```bash
# Migrating Database
knex migrate:latest
# OR
npx knex migrate:latest

# Seeding
knex seed:run
# OR
npx knex seed:run

# OR Instead off 2 of that, you can just run the firstStart.js file on root folder
node firstStart.js
```

Running App : 

```bash
# To Run Back-End APP
npm run dev

# To Run Front-End App
# You need to at client\ Folder
cd ~\client\
npm start
```



Linting:

```bash
# run ESLint
npm run lint

# fix ESLint errors
npm run lint:fix

# run prettier
npm run prettier

# fix prettier errors
npm run prettier:fix
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```
# Port number
PORT=5000

# URL of the DB
DATABASE_URL=postgresql://userName:password@host/databaseName

# JWT
# JWT secret key
JWT_SECRET=thisisasamplesecret
# Number of minutes after which an access token expires
JWT_ACCESS_EXPIRATION_MINUTES=30
# Number of days after which a refresh token expires
JWT_REFRESH_EXPIRATION_DAYS=30
```

## Project Structure

```
public\
 |--bootstrap5      # CSS Framework
 |--css\            # Stylesheet
 |--img\            # Image assets
 |--js\             # Javascript folder for Front-End

src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--db\             # Database Client and Migration Folder
 |--middlewares\    # Custom express middlewares
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--app.js          # Express app
 |--index.js        # App entry point

 views\
  |--archetypes\
  |--auth\
  |--decks\
  |--docs\
  |--users\
  |--_footer.pug
  |--_header.pug
  |--base.pug
  |--overview.pug

```

## API Documentation

To view the list of available APIs and their specifications, run the server on and go to `http://localhost:3000/api-docs` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files.

### API Endpoints

List of available routes :

**User API:**

- Create User: `POST /v1/users`
- Get All Users: `GET /v1/users`
- Get User by ID: `GET /v1/users/{userId}`
- Update User: `PUT /v1/users/{userId}`
- Delete User: `DELETE /v1/users/{userId}`

**Auth API:** (For authentication purposes)

- User Login: `POST /v1/auth/login`
- User Logout: `POST /v1/auth/logout`
- User Register: `POST /v1/auth/register`
- User Refresh Tokens: `POST /v1/auth/refresh-tokens`

**Deck API:**

- Create Deck: `POST /v1/decks`
- Get All Decks: `GET /v1/decks`
- Get Deck by ID: `GET /v1/decks{deckId}`
- Update Deck: `PUT /v1/decks{deckId}`
- Delete Deck: `DELETE /v1/decks{deckId}}`
- Get Decks by User: `GET /v1/users/{userId}/decks`
- Get Decks by Archetype: `GET /v1/archetypes/{archetypeId}/decks`

**Archetype API:**

- Create Archetype: `POST /v1/archetypes`
- Get All Archetypes: `GET /v1/archetypes`
- Get Archetype by ID: `GET /v1/archetypes/{archetypeId}`
- Update Archetype: `PUT /v1/archetypes/{archetypeId}`
- Delete Archetype: `DELETE /v1/archetypes/{archetypeId}`

**Follow API:**

- Create Follow: `POST /v1/follows`
- Delete Follow: `DELETE /v1/follows/{followId}`
- Get Followers by User: `GET /v1/users/{userId}/followers`
- Get Followings by User: `GET /v1/users/{userId}/followings`

**Favorite Deck API:**

- Create Favorite Deck: `POST /v1/favorite-decks`
- Delete Favorite Deck: `DELETE /v1/favorite-decks/{favoriteDecksId}`
- Get Favorite Decks by User: `GET /v1/users/{userId}/favorite-decks`
- Get Followers Deck by Deck `GET v1/decks/{deckId}/followers`

## Error Handling

The app has a centralized error handling mechanism.

Controllers should try to catch the errors and forward them to the error handling middleware (by calling `next(error)`). For convenience, you can also wrap the controller inside the catchAsync utility wrapper, which forwards the error.

```javascript
const catchAsync = require('../utils/catchAsync');

const controller = catchAsync(async (req, res) => {
  // this error will be forwarded to the error handling middleware
  throw new Error('Something wrong happened');
});
```

The error handling middleware sends an error response, which has the following format:

```json
{
  "status": 404,
  "message": "Not found"
}
```

When running in development mode, the error response also contains the error stack.

The app has a utility ApiError class to which you can attach a response code and a message, and then throw it from anywhere (catchAsync will catch it).

For example, if you are trying to get a user from the DB who is not found, and you want to send a 404 error, the code should look something like:

```javascript
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const knex = require('../db/knex');

const getUser = async (userId) => {
  const user = await knex('users').where({ id: userId }).first();
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
};
```

## Validation

Request data is validated using [Joi](https://joi.dev/). Check the [documentation](https://joi.dev/api/) for more details on how to write Joi validation schemas.

The validation schemas are defined in the `src/validations` directory and are used in the routes by providing them as parameters to the `validate` middleware.

```javascript
const express = require('express');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/users', validate(userValidation.createUser), userController.createUser);
```

## Authentication

To require authentication for certain routes, you can use the `auth` middleware.

```javascript
const express = require('express');
const auth = require('../../middlewares/auth');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/users', auth(), userController.createUser);
```

These routes require a valid JWT access token in the Authorization request header using the Bearer schema. If the request does not contain a valid access token, an Unauthorized (401) error is thrown.

**Generating Access Tokens**:

An access token can be generated by making a successful call to the register (`POST /v1/auth/register`) or login (`POST /v1/auth/login`) endpoints. The response of these endpoints also contains refresh tokens (explained below).

An access token is valid for 30 minutes. You can modify this expiration time by changing the `JWT_ACCESS_EXPIRATION_MINUTES` environment variable in the .env file.

**Refreshing Access Tokens**:

After the access token expires, a new access token can be generated, by making a call to the refresh token endpoint (`POST /v1/auth/refresh-tokens`) and sending along a valid refresh token in the request body. This call returns a new access token and a new refresh token.

A refresh token is valid for 30 days. You can modify this expiration time by changing the `JWT_REFRESH_EXPIRATION_DAYS` environment variable in the .env file.

## Authorization

Use `auth` middleware to require certain rights/permissions to access a route.

```javascript
const express = require('express');
const auth = require('../../middlewares/auth');
const userController = require('../../controllers/api-v1/user.controller');

const router = express.Router();

router.post('/users', auth(), userController.create);
router.delete('/users', auth('admin'), userController.delete);
```

In the example above, an authenticated user can access this route only if that user has the `Admin` permission.

If the user making the request does not have the required permissions to access this route, a Forbidden (403) error is thrown.

## Logging

Import the logger from `src/config/logger.js`. It is using the [Winston](https://github.com/winstonjs/winston) logging library.

Logging should be done according to the following severity levels (ascending order from most important to least important):

```javascript
const logger = require('<path to src>/config/logger');

logger.error('message'); // level 0
logger.warn('message'); // level 1
logger.info('message'); // level 2
logger.http('message'); // level 3
logger.verbose('message'); // level 4
logger.debug('message'); // level 5
```

In development mode, log messages of all severity levels will be printed to the console.

In production mode, only `info`, `warn`, and `error` logs will be printed to the console.\
It is up to the server (or process manager) to actually read them from the console and store them in log files.\
This app uses pm2 in production mode, which is already configured to store the logs in log files.

Note: API request information (request url, response code, timestamp, etc.) are also automatically logged (using [morgan](https://github.com/expressjs/morgan)).

## Linting

Linting is done using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io).

In this app, ESLint is configured to follow the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) with some modifications. It also extends [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to turn off all rules that are unnecessary or might conflict with Prettier.

To modify the ESLint configuration, update the `.eslintrc.json` file. To modify the Prettier configuration, update the `.prettierrc.json` file.

To prevent a certain file or directory from being linted, add it to `.eslintignore` and `.prettierignore`.

To maintain a consistent coding style across different IDEs, the project contains `.editorconfig`

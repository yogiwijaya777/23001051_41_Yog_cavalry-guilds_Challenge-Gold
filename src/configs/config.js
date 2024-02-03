const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  development: {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB: process.env.DB,
  },
};

//  jwt: {
//     secret: envVars.JWT_SECRET,
//     accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
//     refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
//     resetPasswordExpirationMinutes: envVars.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
//     verifyEmailExpirationMinutes: envVars.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
//   },
//   email: {
//     smtp: {
//       host: envVars.SMTP_HOST,
//       port: envVars.SMTP_PORT,
//       auth: {
//         user: envVars.SMTP_USERNAME,
//         pass: envVars.SMTP_PASSWORD,
//       },
//     },
//     from: envVars.EMAIL_FROM,
//   },

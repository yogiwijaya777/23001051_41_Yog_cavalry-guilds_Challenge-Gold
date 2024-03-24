const environment = require('../configs/config').env;
const config = require('../../knexfile')[environment];
module.exports = require('knex')(config);

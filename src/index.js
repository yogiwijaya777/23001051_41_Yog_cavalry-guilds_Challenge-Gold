const app = require('./app');
const config = require('./configs/config');
const knex = require('./db/knex');

let server;
console.log(knex);
if (knex) {
  console.log('Connected to Database');
  server = app.listen(config.port, () => {
    console.log(`Listening to port ${config.port}`);
  });
}

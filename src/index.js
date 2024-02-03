const express = require('express');
const app = express();
// const userRouter = require('./routes/user.route');
const knex = require('./db/knex/knex');

console.log(knex);
app.use(express.json());

// app.use('/users', userRouter);

const start = async () => {
  try {
    await knex.migrate.latest();
    console.log('Database connected successfully');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (error) {
    console.log(error);
  }
};

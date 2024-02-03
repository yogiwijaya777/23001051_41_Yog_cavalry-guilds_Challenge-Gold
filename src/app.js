const express = require('express');
const app = express();

// setup body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

module.exports = app;

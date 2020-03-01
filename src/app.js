const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      createError = require('http-errors');

const apiRouter = require('./routes');

const PORT = process.env.PORT || 3000;

require('./db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.get('*', (req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.status(err.statusCode).send(`Ups, Try again!`);
});

app.listen(PORT, () => {
  console.log('The server is running...');
});
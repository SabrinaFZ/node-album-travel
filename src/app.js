const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

const PORT = process.env.PORT || 3000,
      MONGO_URI = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://localhost:27017/album';

const apiRouter = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', apiRouter);

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

mongoose.connection.on('error', console.error.bind(console, 'connection error'));

mongoose.connection.once('open', () => {
  require('./collections');
  app.listen(PORT, () => {
    console.log('The server is running...');
  });
});

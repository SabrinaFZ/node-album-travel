const mongoose = require('mongoose');

const MONGO_URI = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://localhost:27017/album';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

mongoose.connection.on('error', console.error.bind(console, 'connection error'));

mongoose.connection.once('open', () => {
  require('../collections');
});

module.exports = mongoose;
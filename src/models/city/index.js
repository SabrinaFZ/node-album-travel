const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const CountrySchema = require('../country');

const citySchema = new Schema({
  name: String,
  country: {
    type: Schema.Types.ObjectId,
    ref: 'Country'
  }
});

module.exports = citySchema;
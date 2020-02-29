const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const CountrySchema = require('../country'),
      CitySchema = require('../city');

const photoSchema = new Schema({
  title: String,
  city: {
    type: Schema.Types.ObjectId,
    ref: 'City'
  },
  country: {
    type: Schema.Types.ObjectId,
    ref: 'Country'
  },
  description: String,
  publishedDate: Date,
  url: { type: String, unique: true }
});

module.exports = photoSchema;
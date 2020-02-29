const mongoose = require('mongoose');

const photoSchema = require('./photo'),
      citySchema = require('./city'),
      countrySchema = require('./country');

const Photo = mongoose.model('Photo', photoSchema),
      City = mongoose.model('City', citySchema),
      Country = mongoose.model('Country', countrySchema);

module.exports = {
  Photo,
  City,
  Country
};
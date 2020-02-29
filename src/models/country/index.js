const mongoose = require('mongoose');
      Schema = mongoose.Schema;

const countrySchema =  new Schema({
  name: { type: String, unique: true }
});

module.exports = countrySchema;
const mongoose = require('mongoose');

const City = require('../../models').City,
      Country = require('../../models').Country;

const getAllCities = (req, res) => {
  City.find((err, cities) => {
    if(err) {
      return res.status(500).send(err.message);
    }
    res.status(200).json(cities);
  });
};

const getCityByCountry = (req, res) => {
  Country.findOne({
    name: { '$regex': new RegExp(req.params.name, 'i') }
  }, (err, country) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      City.find({
        country: mongoose.Types.ObjectId(country._id)
      }, (err, cities) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        res.status(200).json(cities);
      });
  });
};

const getCityByName = (req, res) => {
  City.find({
    'name': { '$regex': new RegExp(req.params.name, 'i') }
  }, (err, city) => {
    if (err) {
      return res.status(500).send(err.message);
    }
      res.status(200).json(city);
  });
};

module.exports = {
  getAllCities,
  getCityByCountry,
  getCityByName
}
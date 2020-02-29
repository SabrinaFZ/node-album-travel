const mongoose = require('mongoose');

const Photo = require('../../models').Photo
      City = require('../../models').City,
      Country = require('../../models').Country;

const getAllPhotos = (req, res) => {
  Photo.find((err, photos) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(200).json(photos);
  });
};

const getPhotoByCountryAndCity = (req, res) => {
  Country.findOne({
    name: { '$regex': new RegExp(req.params.countryName, 'i') }
  }, (err, country) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    City.findOne({
      country: mongoose.Types.ObjectId(country._id),
      name: { '$regex': new RegExp(req.params.cityName, 'i') }
    }, (err, city) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      Photo.find({
        country: mongoose.Types.ObjectId(country._id),
        city: mongoose.Types.ObjectId(city._id),
      }, (err, photos) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        res.status(200).json(photos);
      });
    });
  });
};

const getPhotoByCity = (req, res) => {
  City.findOne({
    name: { '$regex': new RegExp(req.params.name, 'i') }
  }, (err, city) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    Photo.find({
      city: mongoose.Types.ObjectId(city._id),
    }, (err, photos) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.status(200).json(photos);
    });
  });
};

const getPhotoById = (req, res) => {
  Photo.findById(req.params.id, (err, photo) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(200).json(photo);
  });
};

module.exports = {
  getAllPhotos,
  getPhotoByCountryAndCity,
  getPhotoByCity,
  getPhotoById
}
const express = require('express'),
      router = express.Router();

const countriesController = require('../../controllers').countriesController,
      citiesController = require('../../controllers').citiesController,
      photosController = require('../../controllers').photosController;

router.get('/', countriesController.getAllCountries);
router.get('/:name', countriesController.getCountryByName);
router.get('/:name/cities', citiesController.getCityByCountry);
router.get('/:countryName/cities/:cityName/photos', photosController.getPhotoByCountryAndCity);

module.exports = router;
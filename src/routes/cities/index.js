const express = require('express'),
  router = express.Router();

const citiesController = require('../../controllers').citiesController
      photosController = require('../../controllers').photosController;

router.get('/', citiesController.getAllCities);
router.get('/:name', citiesController.getCityByName);
router.get('/:name/photos', photosController.getPhotoByCity);

module.exports = router;
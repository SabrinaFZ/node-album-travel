const express = require('express'),
  router = express.Router();

const countriesRoutes = require('./countries'),
      citiesRoutes = require('./cities'),
      photosRoutes = require('./photos');

router.use('/countries', countriesRoutes);
router.use('/cities', citiesRoutes);
router.use('/photos', photosRoutes);

module.exports = router;
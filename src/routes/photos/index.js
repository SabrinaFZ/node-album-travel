const express = require('express'),
  router = express.Router();

const photosController = require('../../controllers/').photosController;

router.get('/', photosController.getAllPhotos);
router.get('/:id', photosController.getPhotoById);

module.exports = router;
const mongoose = require('mongoose');

const Country = require('../models').Country;
const City = require('../models').City;
const Photo = require('../models').Photo;

Photo.deleteMany({}, err => {
  if (err) {
    console.error('Error deleting PHOTOS');
  }
});

City.deleteMany({}, err => {
  if (err) {
    console.error('Error deleting CITIES');
  }
});

Country.deleteMany({}, err => {
  if (err) {
    console.error('Error deleting COUNTRIES');
  }
});

const Belgium = new Country({
  _id: new mongoose.Types.ObjectId(),
  name: 'Belgium'
});

const France = new Country({
  _id: new mongoose.Types.ObjectId(),
  name: 'France'
});

const Ireland = new Country({
  _id: new mongoose.Types.ObjectId(),
  name: 'Ireland'
});

const Portugal = new Country({
  _id: new mongoose.Types.ObjectId(),
  name: 'Portugal'
});

const Germany = new Country({
  _id: new mongoose.Types.ObjectId(),
  name: 'Germany'
});

const Spain = new Country({
  _id: new mongoose.Types.ObjectId(),
  name: 'Spain'
});

const UnitedKingdom = new Country({
  _id: new mongoose.Types.ObjectId(),
  name: 'United Kingdom'
});

Belgium.save(err => {
  try {
    const Brussels = new City({
      _id: new mongoose.Types.ObjectId(),
      name: 'Brussels',
      country: Belgium._id
    });

    const Brugges = new City({
      _id: new mongoose.Types.ObjectId(),
      name: 'Brugges',
      country: Belgium._id
    });

    const Antwert = new City({
      _id: new mongoose.Types.ObjectId(),
      name: 'Antwert',
      country: Belgium._id
    });

    const Gant = new City({
      _id: new mongoose.Types.ObjectId(),
      name: 'Gant',
      country: Belgium._id
    });

    Brussels.save(err => {
      if (err) {
        console.log(`Error inserting city ${Brussels.name}`, err)
      }
    });

    Brugges.save(err => {
      if (err) {
        console.log(`Error inserting city ${Brugges.name}`, err)
      }
    });

    Antwert.save(err => {
      if (err) {
        console.log(`Error inserting city ${Antwert.name}`, err)
      }
    });

    Gant.save(err => {
      if (err) {
        console.log(`Error inserting city ${Gant.name}`, err)
      }
    });

  } catch {
    console.log(`Error inserting country ${Belgium.name}`, err)
  }
});

France.save(err => {
  try {
    const Paris = new City({
      _id: new mongoose.Types.ObjectId(),
      name: 'Paris',
      country: France._id
    });

    Paris.save(err => {
      try {
        const PhotoParis1 = new Photo({
          title: 'The Opera of Paris',
          city: Paris._id,
          country: France._id,
          description: "The primary opera and ballet company of France. It was founded in 1669 by Louis XIV as the Académie d'Opéra, and shortly thereafter was placed under the leadership of Jean- Baptiste Lully and officially renamed the Académie Royale de Musique, but continued to be known more simply as the Opéra",
          publishedDate: new Date(),
          url: 'https://photos.google.com/photo/AF1QipMKWBM75Kyd6IPSMVswFcGCJiz5EdRYesdXTY9Y'
        });

        const PhotoParis2 = new Photo({
          title: 'View from Eiffel Tower',
          city: Paris._id,
          country: France._id,
          description: 'View of Champs of Mars',
          publishedDate: new Date(),
          url: 'https://photos.google.com/photo/AF1QipOIz4bvxFju-ClrLQ8QEHrbDpxyqhY5OJIGLGod'
        });

        PhotoParis1.save(err => {
          if(err) {
            console.log(`Error inserting photo ${Photo.title}`, err);
          }
        });

        PhotoParis2.save(err => {
          if (err) {
            console.log(`Error inserting photo ${Photo.title}`, err);
          }
        });

      } catch {
        console.log(`Error inserting city ${Paris.name}`, err)
      }
    });

  } catch {
    console.log(`Error inserting country ${France.name}`, err)
  }
});

Germany.save(err => {
  try {
    const Berlin = new City({
      _id: new mongoose.Types.ObjectId(),
      name: 'Berlin',
      country: Germany._id
    });

    Berlin.save(err => {
      try {
        const PhotoBerlin1 = new Photo({
          title: 'Brandenburg Gate',
          city: Berlin._id,
          country: Germany._id,
          description: 'Is an 18th-century neoclassical monument in Berlin, built on the orders of Prussian king Frederick William II after the temporary restoration of order during the Batavian Revolution',
          publishedDate: new Date(),
          url: 'https://photos.google.com/album/AF1QipMCWLoNo_HztP2Gm6fen0uQSIHPabeeXzroZRs8/photo/AF1QipO2GJEwg4wh195RYKjV624WypER5Z-COQGm_d4h'
        });

        PhotoBerlin1.save(err => {
          if (err) {
            console.log(`Error inserting photo ${Photo.title}`, err);
          }
        });

      } catch {
        console.log(`Error inserting city ${Berlin.name}`, err)
      }
    });

  } catch {
    console.log(`Error inserting country ${Germany.name}`, err)
  }
});


Ireland.save(err => {
  if (err) {
    console.log(`Error inserting country ${Ireland.name}`, err)
  }
});

Portugal.save(err => {
  if (err) {
    console.log(`Error inserting country ${Portugal.name}`, err)
  }
});

Spain.save(err => {
  if (err) {
    console.log(`Error inserting country ${Spain.name}`, err)
  }
});

UnitedKingdom.save(err => {
  if (err) {
    console.log(`Error inserting country ${UnitedKingdom.name}`, err)
  }
});

module.exports = {
  Country,
  City,
  Photo
};
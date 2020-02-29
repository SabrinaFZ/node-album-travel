const Country = require('../../models').Country;

const getAllCountries  = (req, res) => {
  Country.find((err, countries) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(200).json(countries);
  });
};

const getCountryByName = (req, res) => {
  Country.find({
    'name': { '$regex': new RegExp(req.params.name, 'i') }
  },  (err, country) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(200).json(country);
  });
};

module.exports = {
  getAllCountries,
  getCountryByName
};
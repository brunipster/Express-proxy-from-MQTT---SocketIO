var DB = require('../database/db');
var CountryRepository = require('../database/CountryRepository');

const dao = new DB()

const countryRepository = new CountryRepository(dao)

module.exports = { countryRepository }
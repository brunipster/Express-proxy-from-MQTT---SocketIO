var repository = require('../utils/repostory')

const updateCountries = (obj) => {
    let promiseUpdate = [repository.countryRepository.deleteAll()];
    let countries = obj.features
    countries.forEach(obj => {
        let countryAttributes = obj.attributes;
        let country = {
            longitude: countryAttributes.Long_,
            latitude: countryAttributes.Lat,
            recovered: countryAttributes.Recovered,
            active: countryAttributes.Active,
            deaths: countryAttributes.Deaths,
            confirmed: countryAttributes.Confirmed,
            country_region: countryAttributes.Country_Region,
            province_state: countryAttributes.Province_State,
            last_update: new Date().toUTCString,
        }
        promiseUpdate.push(repository.countryRepository.create(country))
    });
    Promise.all(promiseUpdate)
        .then((result) => {
            console.log(`Item updated :` + result.length)
        })
}

module.exports = { updateCountries }
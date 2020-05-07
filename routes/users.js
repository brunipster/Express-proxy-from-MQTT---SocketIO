var express = require('express');
var router = express.Router();
var repository = require('../utils/repostory')
/* GET users listing. */
router.get('/:country', function (req, res, next) {
  const { country } = req.params
  if (country) {
    repository.countryRepository.getByCountry(country).then(result => {
      console.log(result)
      res.status(200).send(result);
    }).catch(error => {
      res.status(500).send(error);
    })
  } else {
    res.status(401) - send("Request malformed");
  }

});

module.exports = router;
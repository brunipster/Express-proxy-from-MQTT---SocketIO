var express = require('express');
var router = express.Router();
var repository = require('../utils/repostory')

router.get('/', function (req, res) {
  repository.countryRepository.getAll().then(result => {
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(204).send({ status: "Not Found" });
    }
  }).catch(error => {
    res.status((500).send(error));
  })
})

router.get('/:country', function (req, res) {
  const { country } = req.params
  if (country) {
    repository.countryRepository.filter({ country_region: country }).then(result => {
      if (result) {
        res.status(200).send(result)
      } else {
        res.status(204).send({ status: "Not Found" })
      }

    }
    ).catch(error => {
      res.status(500).send(error);
    })
  } else {
    res.status(401).send("Request malformed");
  }

});

router.get('/:country/:province', function (req, res) {
  const { country, province } = req.params
  if (country && province) {
    repository.countryRepository.filter({ country_region: country, province_state: province }).then(result => {
      if (result) {
        res.status(200).send(result)
      } else {
        res.status(204).send({ status: "Not Found" })
      }
    }
    ).catch(error => {
      res.status(500).send(error);
    })
  } else {
    res.status(401).send("Request malformed");
  }

});

module.exports = router;
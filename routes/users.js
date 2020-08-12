var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    name: "Daim",
    password: "0995"
  })
});

module.exports = router;

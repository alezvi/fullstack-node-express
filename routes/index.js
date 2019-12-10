var express = require('express');
var router = express.Router();
var products = require('../data/products.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Clase de EJS',
    products: products
  });
});

router.get('/about', function(req, res) {
  res.render('nosotros', {
    title: 'La Empresa',
    text: 'Nuestra empresa fue fundada en el año 1933...'
  });
});

module.exports = router;

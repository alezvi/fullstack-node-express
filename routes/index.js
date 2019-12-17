var express = require('express');
var router = express.Router();
var products = require('../data/products.js')
var stylesheets = require('../data/css.json')
var searchProducts = require('../utils/searchProducts')

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

router.get('/items', function (req, res) {
  products = searchProducts(products, req)

  res.render('list', {
    products: products,
    stylesheets: stylesheets,
    title: 'Mercado Liebre - Listado de Productos'
  })
})

router.get('/items/:id', function (req, res) {
  let product = products.find(function (product, index) {
    return index == req.params.id
  })

  res.render('detail', {
    product: product,
    stylesheets: stylesheets,
    title: 'Detalle del producto'
  })
})

module.exports = router;

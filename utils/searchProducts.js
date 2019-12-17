function priceMin(product, min) {
    return product.price > min
}

function priceMax(product, max) {
    return product.price < max
}

function searchProducts(products, req) {
    return products.filter(function (product) {
        let match = 0

        let score = Object.keys(req.query).length

        if (req.query.price_max) {
            priceMax(product, req.query.price_max) ? match++ : null
        }

        if (req.query.price_min) {
            priceMin(product, req.query.price_min) ? match++ : null
        }

        return match == score
    })
}

module.exports = searchProducts

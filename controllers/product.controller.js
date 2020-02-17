const Product = require('../model/product.model');

exports.test =function (req, res) {
    res.send('Greetings');
}

exports.product_create = (req, res) => {
    let product = new Product({
        name: req.body.name || 'no_name',
        price: req.body.price || 0
    })
}
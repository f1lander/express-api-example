"use strict";

const Product = require("../models/Products");

module.exports = {

    getAll:(req, res, next)=>{

        // Validation

        Product.find({ })
            .exec()
            .then(products => {
                console.log(products);
                res.json(products)
            } )
            .catch(err => res.status(500).json(err));

    },

    getById:(req, res, next)=>{
        const productId = req.query.productId;
        Product.findById(productId)
        .exec()
        .then(product => res.json(product) )
        .catch(err => res.status(500).json(err));
    }

}
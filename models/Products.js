"use strict";

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    brand: { type:String, required:[true, "The brand is required"] },
    category: { type: String},
    sub_category: { type: String },
    product: { type: String },
    product_detail: {type: String },
    ingredients: {type : Array},
    review: {type: Array},
});

module.exports = mongoose.model("Product", ProductSchema);
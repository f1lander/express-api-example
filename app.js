"use strict";

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//mongoose.connect('mongodb://lpkim09:younghee@ds241025.mlab.com:41025/bp_db'); 
var connection = mongoose.connect('mongodb://lpkim09:younghee@ds147551.mlab.com:47551/bp');//'mongodb://lpkim09:younghee@ds241025.mlab.com:41025/bp_db')

var ProductSchema = require("./models/Products");

const newProduct = new ProductSchema();

newProduct.brand = "Some Brand";
newProduct.category = "some Category";
newProduct.sub_category="Some Sub Category";
newProduct.product = "Description of the product";
newProduct.product_detail = "Detail of product";
newProduct.ingredients = ["water", "meat", "salt"];
newProduct.review = ["A good review", "Bad Review"];

newProduct.save();

var index = require('./routes/index');
var users = require('./routes/users');
const products = require('./routes/products');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// set the routes with the prefix
app.use('/', index);
app.use('/users', users);
app.use('/products', products);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

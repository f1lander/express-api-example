var express = require('express');
var router = express.Router();
const ProdutController = require("../controllers/products");
/* GET users listing. */
router.get('/', ProdutController.getAll);
router.get('/:product_id', ProdutController.getById);

module.exports = router;

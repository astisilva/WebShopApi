const express = require('express');
const productsController = require('../controllers/productsController');

function routes() {
  const productRouter = express.Router();
  const controller = productsController();

  productRouter.route('/products').get(controller.get);
  productRouter.route('/products/:Id').get(controller.get);

  return productRouter;
}

module.exports = routes;

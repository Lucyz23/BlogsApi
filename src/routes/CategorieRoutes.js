const { Router } = require('express');
const categoriesController = require('../controller/categoriesController');

const route = Router();

route.post('/', categoriesController.create);
route.get('/', categoriesController.findAll);

module.exports = route;
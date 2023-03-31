const express = require('express');
const usersController = require('../controller/users.controller');

const route = express.Router();

route.post('/', usersController.create);
route.get('/', usersController.findAll);
route.get('/:id', usersController.findByID);

module.exports = route;
const { Router } = require('express');
const loginController = require('../controller/loginController');

const route = Router();

route.post('/', loginController.login);

module.exports = route;
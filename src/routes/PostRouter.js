const { Router } = require('express');
const postsController = require('../controller/postController');

const route = Router();

route.post('/', postsController.create);

module.exports = route;
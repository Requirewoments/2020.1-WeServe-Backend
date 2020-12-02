const { Router } = require('express');
const UserController = require('./../src/controllers/UserController');

const routes = Router();

routes.get('/', UserController.firstMessage);
routes.get('/user/:id', UserController.read);
routes.post('/user', UserController.create);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);
routes.post('/user/auth', UserController.authenticate);

module.exports = routes;
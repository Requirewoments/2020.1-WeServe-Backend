const { Router } = require('express');
const UserController = require('../src/controllers/UserController');
const ServiceController = require('../src/controllers/ServiceController');

const routes = Router();

routes.get('/', UserController.firstMessage);
routes.post('/user', UserController.create);
routes.get('/user/:id', UserController.read);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);

routes.post('/service', ServiceController.create);
routes.get('/service/:id', ServiceController.read);
routes.put('/service/:id', ServiceController.update);
routes.delete('/service/:id', ServiceController.delete);

module.exports = routes;
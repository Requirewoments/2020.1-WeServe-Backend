const {Router} = require('express');
const { builtinModules } = require('module');
const ServiceController = require('./../src/controllers/ServiceController');

const routes = Router();

routes.post('/service', ServiceController.create);
routes.get('/service/:id', ServiceController.read);
routes.put('/service/:id', ServiceController.update);
routes.delete('/service/:id', ServiceController.delete);

module.exports = routes;
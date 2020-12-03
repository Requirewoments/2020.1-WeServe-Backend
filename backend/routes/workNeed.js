const { Router } = require('express');
const WorkNeedController = require('./../src/controllers/WorkNeedController');

const routes = Router();

routes.get('/work-need', WorkNeedController.readAll);
routes.get('/work-need/:email', WorkNeedController.read);
routes.post('/work-need', WorkNeedController.create);
routes.put('/work-need/:id', WorkNeedController.update);
routes.delete('/work-need/:id', WorkNeedController.delete);

module.exports = routes;
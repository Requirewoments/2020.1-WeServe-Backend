const {Router} = require('express');
const ProposalsController = require('./../src/controllers/ProposalController');

const routes = Router();

routes.get('/proposals', ProposalsController.read);
routes.post('/proposals', ProposalsController.create);
routes.put('/proposals/:id', ProposalsController.update);
routes.delete('/proposals/:id', ProposalsController.delete);

module.exports = routes;
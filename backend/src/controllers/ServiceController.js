const requireDir = require('require-dir');
const {getClient} = require('./../utils/getClient');
const mongoose = require('mongoose');
requireDir('./../models');
const Service = mongoose.model('Service');
let client, db;

getClient().then(onfulfilled => { 
    client = onfulfilled;
    db = client.db('WeServe');
});

module.exports = {

    async read(request, response) {
        try {
            let service = await Service.findOne({_id: request.params.id});
            if (!service) {
                return response.status(404).json({error: 'Esse serviço não foi cadastrado!'});
            }
            return response.json(service);
        } catch(error) {
            console.log(error);
        }
    },
    async index(request, response) {
        try {
            let services = await Service.find();
            return response.json(services);
        } catch(error) {
            console.log(error);
        }
    },
    async create(request, response) {
        try {
            const service = new Service(request.body);
            await service.save();
            let serviceJSON = JSON.stringify(service)
            return response.send(`${serviceJSON}`);
        } catch (error) {
            console.log(error);
        }    
    },

    async update(request, response) {
        try {
            const service = await Service.findByIdAndUpdate(request.params.id, request.body, { new: true });
            if (!service) {
                return response.status(404).json({error: 'Esse serviço não foi cadastrado!'});
            }
            await service.save();
            return response.json(`Service ${service.name} updated!`);
        } catch (error) {
            console.log(error);
        }
    },

    async delete(request, response){
        const service = await Service.findByIdAndDelete(request.params.id);
        return response.json('Service deleted!');
    }
}
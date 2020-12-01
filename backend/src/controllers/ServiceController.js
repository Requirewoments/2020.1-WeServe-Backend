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
        const service = await Service.findById(request.params.id);
        return response.json(service);
    },

    async create(request, response) {
        try {
            const service = new Service(request.body);
            await service.save();
            return response.send(`${service}`);
        } catch (error) {
            console.log(error);
        }    
    },

    async update(request, response) {
        try {
            const service = await Service.findByIdAndUpdate(request.params.id, request.body, { new: true });
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
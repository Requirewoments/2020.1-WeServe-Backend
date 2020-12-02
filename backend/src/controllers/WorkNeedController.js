const requireDir = require('require-dir');
const mongoose = require('mongoose');
requireDir('./../models');
const WorkNeed = mongoose.model('WorkNeed');
const User = mongoose.model('User');

module.exports = {
    firstMessage(request, response) {
        return response.json('Bienvenue!');
    },
    async read(request, response) {
        const user = request.params.email;
    
        const work = await WorkNeed.findOne({user});
        return response.json(work);
    },
    async create(request, response) {
        const {user} = request.body;

        try {
            const find = await User.findOne({email: user});
            if (!find) {
                return response.status(404).json({error: "Não há nenhum usuário registrado com esse email!"});
            }

            const work = new WorkNeed(request.body);
            await work.save();
            return response.json(work);
        } catch (error) {
            console.log(error);
        }
    },
    async update(request, response) {
        try {
            const data = request.body;
            const work = await WorkNeed.updateOne({_id: request.params.id}, data);
            return response.json(work);
        } catch(error) {
            console.log(error);
        }
    },
    async delete(request, response) {
        try {
            const work = await WorkNeed.deleteOne({_id: request.params.id});
            return response.json(`Deleted:\n${work}`);
        } catch (error) {
            console.log(error);
        }
    }
}

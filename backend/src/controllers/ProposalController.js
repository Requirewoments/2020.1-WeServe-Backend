const requireDir = require('require-dir');
const mongoose = require('mongoose');
requireDir('./../models');

const Proposal = mongoose.model('Proposal');
const User = mongoose.model('User');
const Service = mongoose.model('Service');

module.exports = {
    async read(request, response) {
        try {
            const proposals = Proposal.find();
            return response.json(proposals);
        } catch(error) {
            console.log(error);
        }
    },
    async create(request, response) {
        const {service, user} = request.body;

        try {
            const work = await Service.findOne({_id: service});
            const author = await User.findOne({email: user});

            if (await !work) {
                return response.status(404).json('O anúncio parece que foi excluído ou não existe.');
            }
            if (await !author) {
                return response.status(404).json('Usuário inválido, parece que o usuário não existe ou foi excluído.');
            }
            const prop = await Proposal.create(request.body);
            return response.json(prop);
        } catch (error) {
            console.log(error);
        }
    },
    async update(request, response) {
        try {
            let prop = await Proposal.updateOne({_id: request.params.id}, request.body);
            if (await !prop) {
                return response.status(404).json('Essa proposta parece que foi excluída!');
            }
            return response.json(prop);
        } catch (error) {
            console.log(error);
        }
    },
    async delete(request, response) {
        try {
            let prop = await Proposal.findByIdAndDelete(request.params.id);
            if (await !prop) {
                return response.status(404).json('Essa proposta parece que não existe ou já havia sido removida antes.');
            }
            return response.json('Proposta excluída com sucesso!');
        } catch (error) {
            console.log(error);
        }
    }
}
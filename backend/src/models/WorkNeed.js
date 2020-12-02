const mongoose = require('mongoose');

const WorkNeedSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, 'Descrição obrigatória!']
    },
    offeredServices: {
        type: String,
        required: [true, 'Obrigatório citar ao menos um serviço a oferecer em troca!']
    },
    user: {
        type: String,
        ref: 'User'
    },
    contacts: {
        type: [String],
        required: [true, 'É obrigatório adicionar ao menos um contato']
    },
    createdAt: {
        type: Date,
        default: Date.now,
    } 
});

mongoose.model('WorkNeed', WorkNeedSchema, 'work-need');
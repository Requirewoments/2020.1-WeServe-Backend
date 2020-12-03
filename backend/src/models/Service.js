const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: [true, 'Título necessário!'],
    },
    author: {
        type: String,
        ref: 'User',
        required: [true, 'É necessário um autor!'],
    },
    category: {
        type: String,
        required: [true, 'Categoria necessária!'],
    },
    description: {
        type: String,
        required: [true, 'Descrição necessária!'],
    },
    contacts: {
        type: String,
        required: [true, 'É necessário adicionar ao menos um contato']
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model('Service', ServiceSchema, 'service');
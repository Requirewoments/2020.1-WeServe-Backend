const mongoose = require('mongoose');

const ProposalSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, 'Descreva o(s) serviço(s) que oferecerá em troca!']
    },
    contacts: {
        type: String,
        required: [true, 'É obrigatório ao menos um contato para futuras negociações!']
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true,
    },
    user: {
        type: String,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model('Proposal', ProposalSchema, 'proposals');
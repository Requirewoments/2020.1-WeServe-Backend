const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name required!'],
    },
    service: {
        type: String,
        required: [true, 'Service required!'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model('Service', ServiceSchema);
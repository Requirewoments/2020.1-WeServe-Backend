const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: [true, 'Title required!'],
    },
    author: {
        type: String,
        required: [true, 'Author required!'],
    },
    category: {
        type: String,
        required: [true, 'Category required!'],
    },
    description: {
        type: String,
        required: [true, 'Description required!'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model('Service', ServiceSchema);
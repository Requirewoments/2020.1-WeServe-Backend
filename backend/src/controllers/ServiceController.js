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

}
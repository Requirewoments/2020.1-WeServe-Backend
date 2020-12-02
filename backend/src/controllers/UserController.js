const requireDir = require('require-dir');
const {getClient} = require('./../utils/getClient');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const { response } = require('express');
requireDir('./../models');
const User = mongoose.model('User');
let client, db;

getClient().then(onfulfilled => { 
    client = onfulfilled;
    db = client.db('WeServe');
});

module.exports = {
    firstMessage(request, response) {
        return response.json('You are welcome!');
    },

    async read(request, response) {
        const user = await User.findById(request.params.id);
        return response.json(user);
    },

    async create(request, response) {
        const {email} = request.body;
        
        try {
            if (await User.findOne({ email })){
                return response.status(400).json({ error: "User email already on use" });
            }

            const user = new User(request.body);

            await user.save();
            return response.send(`${user}`);
        } catch(error) {
            console.log(error);
        }
    },

    async update(request, response) {
        try {
            const user = await User.findByIdAndUpdate(request.params.id, request.body, { new: true });
            await user.save();
            return response.json(`User ${user.name} updated!`);
        } catch (error) {
            console.log(error);
        }
    },

    async delete(request, response){
        const user = await User.findByIdAndDelete(request.params.id);
        return response.json('User deleted!');
    },

    async authenticate(request, response){
        const { email, password } = request.body;

        const user = await User.findOne({ email });

        if (!user)
            return response.status(400).send({ error: 'Invalid email'});
        
        if (!await bcrypt.compare(password, user.password))
            return response.status(400).send({ error: 'Invalid password' });

        response.send({ user });
    }
}
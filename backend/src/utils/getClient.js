const {MongoClient} = require('mongodb');

module.exports = {
    async getClient() {
        const uri = 'mongodb%2Bsrv%3A%2F%2Fmaiconmares%3Aqnpjeposf4580%40cluster0.pr5dc.mongodb.net%2FWeServe%3FretryWrites%3Dtrue%26w%3Dmajority';
        const client = new MongoClient(decodeURIComponent(uri), {useNewUrlParser: true, useUnifiedTopology: true});

        try {
            await client.connect();
            
        } catch (e) {
            console.log(e);
        }
        return client;
    }
}
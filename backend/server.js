const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');
const usersRoutes = require('./routes/routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.json());
app.use(cors());
app.use(usersRoutes);

const main = async () => {
    const uri = 'mongodb%2Bsrv%3A%2F%2Fmaiconmares%3Aqnpjeposf4580%40cluster0.pr5dc.mongodb.net%2FWeServe%3FretryWrites%3Dtrue%26w%3Dmajority';
    const client = mongoose.connect(decodeURIComponent(uri), {useNewUrlParser: true, useUnifiedTopology: true});
}


main().then().catch(console.error);

/*mongoose.connect('mongodb+srv://maiconmares:qnpjeposf4580@cluster0.pr5dc.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});*/

app.listen(3003);

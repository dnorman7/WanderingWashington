
const mongoose = require('mongoose');

//shortcut variables
const db = mongoose.connection;
const connectionURI = 'mongodb+srv://admin:1503548Aa!@cluster0.sog95.mongodb.net/hiking-app?retryWrites=true&w=majority';

mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

db.on('connected', function () {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`)
});
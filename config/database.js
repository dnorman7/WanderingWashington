// require mongoose module
const mongoose = require('mongoose');

//shortcut variables
const db = mongoose.connection;

// connect to mongoDB
const connectionURI = 'mongodb+srv://admin:1503548Aa!@cluster0.sog95.mongodb.net/hiking-app?retryWrites=true&w=majority';

mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// listener to confirm connection
db.on('connected', function () {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`)
});

db.on('error', function(error) {
    console.log(`Encountered the following error: ${error.message}`);
});
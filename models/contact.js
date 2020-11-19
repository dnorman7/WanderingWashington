// require mongoose
const mongoose = require('mongoose');

// shortcut variable for Schema
const Schema = mongoose.Schema;

// hikeSchema
const contactSchema = new Schema({
    Message: {
        type: String
    }
});


// export the result of compiling our schema into a model
module.exports = mongoose.model('Contact', contactSchema);
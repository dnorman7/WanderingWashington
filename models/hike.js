// require mongoose
const mongoose = require('mongoose');

// shortcut variable for Schema
const Schema = mongoose.Schema;

// hikeSchema
const hikeSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Intensity : {
        type: String,
        required: true
    },
    Length: {
        type: String,
        required: true
    },
    PhotoURL: String
    }, { timestamps: true });


// export the result of compiling our schema into a model
module.exports = mongoose.model('Hike', hikeSchema);
// (optional) require the model
const Contact = require('../models/contact');

// set up module.exports

module.exports = {
    index,
    send
};

// define our controller actions

function index(req, res) {
    Contact.find({}, function(err, contact) {
        res.render('contact/index', { contact })
    });
}

function send(req, res) {
    Contact.create(req.body, function(err, contact) {
        console.log('create Contact', err, contact);
        res.redirect('/') // URI
    });
}
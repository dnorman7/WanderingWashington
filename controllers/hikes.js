// (optional) require the model
const Hike = require('../models/hike');

// set up module.exports

module.exports = {
    index,
    new: newHike,
    create,
    delete: deleteHike,
    edit,
    update
};

// define our controller actions

function index(req, res) {
    Hike.find({}, function(err, hikes) {
        res.render('hikes/index', { hikes })
    });
}


function newHike(req, res) {
    res.render('hikes/new'); // file path
}


function create(req, res) {
    Hike.create(req.body, function(err, hike) {
        res.redirect('/hikes') // URI
    });
}

/*
    req.body = {'title': 'here is a title'} -> form data
    req.params.id = '/notes/:id' => /notes/dowqbdiuwbidh89e2g2e72e72e

*/


function deleteHike(req, res) {
    Hike.findByIdAndDelete(req.params.id, function(err, deletedHike) {
        res.redirect('/hikes');
    });
}


function edit(req, res) {
    Hike.findById(req.params.id, function(err, hike) {
        res.render('hikes/edit', { hike });
    });
}


function update(req, res) {
    Hike.findByIdAndUpdate(req.params.id, req.body, function(err, updatedHike) {
        res.redirect('/hikes');
    });
}
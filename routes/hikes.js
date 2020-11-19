// require express
const express = require('express');

// create the router object
const router = express.Router();

// require the controller
const hikesCtrl = require('../controllers/hikes');

// define the routes

// GET '/notes -> index view -> index controller controller -> show me all the notes
router.get('/', hikesCtrl.index);

// GET '/notes/new -> new view -> new controller action -> give me a form where I can create a new note
router.get('/new', hikesCtrl.new);

// POST '/notes' -> create controller action ->  create a new note
router.post('/', hikesCtrl.create);

// DELETE '/notes/:id' -> delete controller action -> delete a specific note
router.delete('/:id', hikesCtrl.delete);

// GET '/notes/:id/edit' -> edit controller action -> give me a form for editing a note
router.get('/:id/edit', hikesCtrl.edit);

// PUT '/notes/:id' -> update controller action -> update a note by id
router.put('/:id', hikesCtrl.update);

// export the router object
module.exports = router;

// TODO: require and mount the router inside of server.js
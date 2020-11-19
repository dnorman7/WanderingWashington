// require express
const express = require('express');

// create the router object
const router = express.Router();

// require the controller
const contactCtrl = require('../controllers/contact');

// define the routes

// GET '/notes -> index view -> index controller controller -> show me all the notes
router.get('/', contactCtrl.index);

router.post('/', contactCtrl.send);

// export the router object
module.exports = router;
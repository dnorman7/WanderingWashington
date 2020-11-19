// require modules
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
    // router modules
const indexRouter = require('./routes/index');
const hikesRouter = require('./routes/hikes');
const contactRouter = require('./routes/contact');



// express app
const app = express();

// port value
const port = 3000;

// connect to DB
require('./config/database');

// configure settings
app.set('view engine', 'ejs');

// mount middleware
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/', indexRouter);
app.use('/hikes', hikesRouter);
app.use('/contact', contactRouter);


// app to listen
app.listen(port, function() {
    console.log(`Express is listening on port: ${port}`);
});
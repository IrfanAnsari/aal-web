const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;


var app = express();

app.use(express.static(path.join(__dirname, 'public')));

// set the view engine to ejs
app.set('view engine', 'ejs');


app.set('views', path.join(__dirname, 'views'));

// use res.render to load up an ejs view file

// index page

app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/list');
});


app.listen( PORT);

console.log(`Listening on ${ PORT }`);



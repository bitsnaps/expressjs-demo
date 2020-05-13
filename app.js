var express = require('express');
var app = express();

// mount a middleware
app.use(express.static('public'));
// app.use(urlencode); // we could use this for all routes

var cities = require('./routes/cities');
app.use('/cities', cities);


/*var PORT = 3000;
app.listen(PORT, function(){
    console.log('Running on port:', PORT);
});*/

module.exports = app;

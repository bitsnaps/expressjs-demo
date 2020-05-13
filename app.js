var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// use native node string parser library
var urlencode = bodyParser.urlencoded({extended: false});

// mount a middleware
app.use(express.static('public'));
// app.use(urlencode); // we could use this for all routes

cities = {
  'Alger':'Central capital of Algeria',
  'Oran':'Western big city',
  'Annaba':'Eastern big city'
};

app.get('/', function(req, res) {
    res.send('OK');
});

app.get('/cities', function (req, res) {
  res.json(Object.keys(cities));
});

app.post('/cities', urlencode, function (req, res) {
  var newCity = req.body;
  cities[newCity.name] = newCity.description;
  res.status(201).json(newCity.name);
});

/*var PORT = 3000;
app.listen(PORT, function(){
    console.log('Running on port:', PORT);
});*/

module.exports = app;

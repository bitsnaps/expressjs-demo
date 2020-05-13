var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// use native node string parser library
var urlencode = bodyParser.urlencoded({extended: false});

// mount a middleware
app.use(express.static('public'));
// app.use(urlencode); // we could use this for all routes

// Redis connection
var redis = require('redis');
if (process.env.REDISTOGO_URL){
  var rtg = require('url').parse(process.env.REDISTOGO_URL);
  var client = redis.createClient(rtg.port, rtg.hostname);
  client.auth(rtg.auth.split(':')[1]);
} else {
  var client = redis.createClient();
  // select the database number (here we use node env variable)
  // here we separate the running in dev mode from test mode (default: 0)
  client.select((process.env.NODE_ENV || 'development').length);
}

// End Redis connection

// Data Fixtures
// client.hset('cities', 'Alger', 'description');
// client.hset('cities', 'Oran', 'description');
// client.hset('cities', 'Annaba', 'description');

// cities = {
//   'Alger':'Central capital of Algeria',
//   'Oran':'Western big city',
//   'Annaba':'Eastern big city'
// };

app.get('/', function(req, res) {
    res.send('OK');
});

app.get('/cities', function (req, res) {
  // res.json(Object.keys(cities));
  client.hkeys('cities', function (error, names) {
    if (error) throw error;
    res.json(names);
  })
});

app.post('/cities', urlencode, function (req, res) {
  var newCity = req.body;
  if(!newCity.name || !newCity.description){
    res.sendStatus(400);
    return false;
  }
  client.hset('cities', newCity.name, newCity.description, function (error) {
    if (error) throw error;
    // cities[newCity.name] = newCity.description;
    res.status(201).json(newCity.name);
  });
});

app.delete('/cities/:name', function (req, res) {
  client.hdel('cities', req.params.name, function (error){
    if(error) throw error;
    res.sendStatus(204);
  });
});

app.get('/cities/:name', function (req, res) {

  client.hget('cities', req.params.name, function (error, description) {
    res.render('show.ejs', {city: {name: req.params.name,
    description: description}});
  });
});



/*var PORT = 3000;
app.listen(PORT, function(){
    console.log('Running on port:', PORT);
});*/

module.exports = app;

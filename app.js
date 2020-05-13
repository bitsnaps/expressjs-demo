var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('OK');
});

app.get('/cities', function (req, res) {
  res.json(['Alger', 'Oran', 'Annaba']);
});

/*var PORT = 3000;
app.listen(PORT, function(){
    console.log('Running on port:', PORT);
});*/

module.exports = app;

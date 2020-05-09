var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('OK');
});


/*var PORT = 3000;
app.listen(PORT, function(){
    console.log('Running on port:', PORT);
});Â*/

module.exports = app;

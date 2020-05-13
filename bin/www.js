/*
* This is a convention from express.js team
* this file allows to separate the app from
* the listening runner
*/

var app = require('./../app');
var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log('Listening on port:', port);
});

/*
* This is a convention from express.js team
* this file allows to separate the app from
* the listening runner
*/
*
var app = require('./../app');

app.listen(3000, function(){
  console.log('Listening on port:', 3000);
});

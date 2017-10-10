
// require express (returns a function);
var express = require('express');

var app = express(); // returns an object
var port = 3000;

// express static file serving. path to root
app.use(express.static('server/public'));

// start server listening
app.listen(port, function(){
  console.log('Listening on port',port);
});
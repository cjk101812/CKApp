// BRING IN MODULES
var express  = require('express');
var app      = express();


//FOR LATER MONGO INTEGRATION
//var mongoose = require('mongoose');
//mongoose.connect('LOCALMONGOINSTANCE');


app.use(express.static(__dirname + '/../Angular/app'));


// LISTEN ON PORT
app.listen(8080);
console.log("App listening on port 8080");
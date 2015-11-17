// BRING IN MODULES
var express  = require('express');
var app      = express();

//ESTABLISH MONGO CONNECTION
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost/test');
var testSchema = new mongoose.Schema({
	"name": String,
	"test": String
});
var Test = db.model('Test', testSchema, 'Test');


//DEPLOY APPLICATION
app.use(express.static(__dirname + '/../Angular/app'));
//NEED TO REFERENCE BOWER COMPONENTS HERE
app.use('/bower_components',  express.static(__dirname + '/../Angular/bower_components'));


//=======================================//
//=========SET UP SOME ROUTES============//
//=======================================//
app.get('/gettests', function(req, res) {
    // use mongoose to get all todos in the database
    Test.findOne({}, function(error, data){
        res.json(data);
    });
});

app.get('/gettests/:user', function(req, res) {
    // use mongoose to get all todos in the database
    var query = Test.find({name:req.params.user});
    console.log(req.params.user + " Logged In");
    query.exec(function(err, data){
        res.json(data);
    });
});

app.get('/uh', function(req, res) {
    res.send('Hello World');
});

app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});
//=======================================//
//=======================================//
//=======================================//


// LISTEN ON PORT
app.listen(8080);
console.log("App listening on port 8080");
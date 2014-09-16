//File: app.js
//main file

// Required modules
var express = require('express');
var fs = require('fs');
var http = require ('http');
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var couchbase = require("couchbase");
// Creating express app
var app = express();

couchbase = new couchbase.Connection({host: "localhost:8091", bucket: "default"}, function(err) {
	if (err) throw err;
});	

// Setting listening port
app.set('port', process.env.PORT || 3000);
// Views location
app.set('views', __dirname + '/views');
// View engine used
app.set('view engine', 'jade');


//models
require('./models/model');

//controller js
fs.readdirSync('./controllers').forEach(function (file) {
   if(file.substr(-3) == '.js') {
       route = require('./controllers/' + file)(app, couchbase);
   }
});

//Listening port : 3000
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
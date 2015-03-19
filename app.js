
var express = require('express');
var app = module.exports = express();
var http = require('http');
var log = require('custom-logger').config({ level: 0 });
var server = http.createServer(app)

var config = require('./config/config')(app, express);

require('./routes/routes')(app, log);

server.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
	//process.on('uncaughtException', function(err) {
	  //console.log('Caught exception: ' + err);
	//});
});
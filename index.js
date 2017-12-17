// strict
'use strict';

// requires
var fs = require('fs');
var http = require('http');
var express = require('express');
var path = require('path');


// other vars to be defined
var app, server;

app = express();
app.use(express.static('dist')); // statically server everything in the public folder
app.get('/', function (req,res) {
	res.sendFile(path.join(__dirname + '/dist/index.html')); // serve our static index.html
});

server = http.createServer(app);

// listening ports
server.listen(process.env.PORT || 8080);

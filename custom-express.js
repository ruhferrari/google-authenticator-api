var express = require("express");
var bodyParser = require('body-parser');

module.exports = function(){
	var app = express();
	app.use(bodyParser());
	require('./routes/authenticator')(app);
	return app;
	};

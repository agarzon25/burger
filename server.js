var express = require('express');
var methodOverride = require('method-override');
var app = express();

// port
var PORT = process.env.PORT || 3233;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Listen on port
app.listen(PORT, function() {
	console.log("App now listening at localhost:" + PORT)
})
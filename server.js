var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;

app.listen(port);

console.log("ZIP Code Cost API server now started on: " + port);
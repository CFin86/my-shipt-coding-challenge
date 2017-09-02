var express = require('express');
var app = express();
var morgan = require('morgan');  
var bodyParser = require('body-parser');
var path = require('path');


var clientPath = path.join(__dirname, '../client');
app.use(morgan('dev'));        

app.use('/static', express.static(path.join(__dirname, '../client')))

var api = require('./api');


app.use(express.static(clientPath));
app.use(bodyParser.json());

app.use('/api', api);

app.get('*', function (req, res) {
	res.sendFile('./client/index.html');
});
// app.listen(3000);
app.listen(process.env.PORT || 3000);
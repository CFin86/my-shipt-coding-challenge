var express = require('express');
var app = express(); 
var bodyParser = require('body-parser');
var path = require('path');
var prerender = require('prerender-node')

var clientPath = path.join(__dirname, '../client');     

app.use('/static', express.static(path.join(__dirname, '../client')))
app.use(prerender.set('prerenderToken', 'Y2ljUX08lEV2mHIMOnxu'));
var api = require('./api');


app.use(express.static(clientPath));
app.use(bodyParser.json());

app.use('/api', api);

app.get('*', function (req, res) {
    res.sendFile('./client/index.html');
});

app.listen(process.env.PORT || 3000);
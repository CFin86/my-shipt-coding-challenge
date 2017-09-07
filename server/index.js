var express = require('express'),
    app = express(),
    routeMW = require("./middleware/route.mw.js"),
    bodyParser = require('body-parser'),
    path = require('path'),
    prerender = require('prerender-node'),
    api = require('./api');
    clientPath = path.join(__dirname, '../client');


app.use('/static', express.static(path.join(__dirname, '../client')))
app.use(prerender.set('prerenderToken', 'Y2ljUX08lEV2mHIMOnxu'));


app.use(express.static(clientPath));
app.use(bodyParser.json());

app.use('/config/api', api);

app.get("*", function (req, res, next) {
    "use strict";
    if (routeMW.isAsset(req.url)) {
        next();
    } else {
        res.sendFile(path.join(__dirname, "../client/index.html"));
    }
});

app.listen(process.env.PORT || 3000);
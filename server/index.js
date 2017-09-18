var express = require("express"),
    app = express(),
    routeMW = require("./middleware/route.mw.js"),
    bodyParser = require("body-parser"),
    path = require("path"),
    prerender = require("prerender-node"),
    api = require("./api"),
    mysql = require("mysql"),
    userProc = require("./procedures/users.proc"),
    // cookieParser = require("cookie-parser"),
   // expressSessions = require("express-sessions"),
    clientPath = path.join(__dirname, "../client");

// function auth(req, res, next) {
//     console.log(req.headers);
//     var authHeader = req.headers.authorization;
//     if (!authHeader) {
//         var err = new Error("You are not authenticated!");
//         err.status = 401;
//         next(err);
//         return;
//     }
//     var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
//     var user = auth[0];
//     var pass = auth[1];
//     if (user === 'admin' && pass === 'pass') {
//         next();
//     } else {
//         var err = new Error('You are not authenticated!');
//         err.status = 401;
//         next(err);
//     }
// }

// app.use(auth);
app.use("/static", express.static(path.join(__dirname, "../client")));
app.use(express.static(clientPath));
app.use(bodyParser.json());



// app.use(function (err,req,res,next) {
//     res.writeHead(err.status || 500, {
//         'WWW-Authenticate': 'Basic',
//         'Content-Type': 'text/plain'
//         });
//         res.end(err.message);
//     });

app.use(prerender.set("prerenderToken", "Y2ljUX08lEV2mHIMOnxu"));
app.use("/api", api);

app.get("*", function (req, res, next) {
    "use strict";
    if (routeMW.isAsset(req.url)) {
        next();
    } else {
        res.sendFile(path.join(__dirname, "../client/index.html"));
    }
});

app.listen(process.env.PORT || 3000);
"use strict";
var express = require('express'),
    router = express.Router(),
    request = require('request'),
    baseURL = "https://api.github.com/";

router.route('/')
    .get(function (req, res, next) {
        request({
            uri: baseURL + "rate_limit",
            headers: {
                'User-Agent': 'cfin86'
            }
        }).pipe(res);
    });

module.exports = router;
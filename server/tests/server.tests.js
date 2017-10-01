var expect = require('../../node_modules/chai/chai').expect;
var request = require('request');
var url = require('url');

function waitForThen(test, cb) {
    setTimeout(function () {
        test() ? cb.apply(this) : waitForThen(test, cb);
    }, 5);
}

describe('Node Server', function () {

    it('Should answer requests for / with a 200 status code', function (done) {
        request('http://localhost:3000/', function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('Should answer requests for content according to contentType', function (done) {
        request('http://127.0.0.1:3000/', function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('Should answer GET requests for /api/chirps with a 200 status code', function (done) {
        request('http://localhost:3000/config/api/githublimit/', function (error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
//
    it('should respond to API get request with a JSON data that is 234', function (done) {
        request('http://localhost:3000/config/api/githublimit/', function (error, response, data) {
            expect(data.length).to.equal(234);
            done();
        });
    });


    it('should accept GET requests to /api/github', function (done) {
        var requestParams = {
            method: 'GET',
            uri: "https://api.github.com/rate_limit",
            headers: {
                'User-Agent': 'cfin86'
            }
        };

        request(requestParams, function (error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

});

it('Should 404 when asked for a nonexistent file', function (done) {
    request('http://localhost:3000/config/api/githublimit/afsdafas', function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
    });
});
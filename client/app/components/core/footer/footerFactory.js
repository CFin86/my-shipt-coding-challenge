angular.module("app.factories", ["ngResource"])

    .factory("GithubLimit", ["$resource", function ($resource) {
        "use strict";
        return $resource("http://cfin-shipt-challenge.us-east-2.elasticbeanstalk.com/api/githublimit");
    }]);
angular.module("app.factories", ["ngResource"])

    .factory("GithubLimit", ["$resource", function ($resource) {
        "use strict";
        return $resource("http://localhost:3000/config/api/githublimit/");
    }]);
angular.module("app.factories", ["ngResource"])

    .factory("GithubLimit", ["$resource", function ($resource) {
        "use strict";
        return $resource("/api/githublimit/");
    }]);
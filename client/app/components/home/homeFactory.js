angular.module("home.factories", ["ngResource"])

    .factory("User", ["$resource", function ($resource) {
        "use strict";
        return $resource("http://localhost:3000/api/users/");
    }]);
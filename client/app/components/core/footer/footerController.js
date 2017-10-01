app.controller("FooterController", ["$scope", "GithubLimit",
        function ($scope, GithubLimit) {
    "use strict";
    $scope.reqs = GithubLimit.get();
}]);
//build these as components
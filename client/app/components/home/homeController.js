app.controller("HomeController", ["$scope", "$http", "$state", "$q", function ($scope, $http, $state, $q) {

    "use strict";
    var pageCount = 1;
    $scope.userInfo = true;
    $scope.available = true;
    $scope.loadMore = true;
    $scope.restart = true;

    $scope.search = function () {
        pageCount = 1;
        var githubUser = $http.get("https://api.github.com/users/" + $scope.User),
            followers = $http.get("https://api.github.com/users/" + $scope.User + "/followers"),
            requestsRemaining = $http.get("https://api.github.com/rate_limit");
        $q.all([githubUser, followers, requestsRemaining])
            .then(function (resolve) {
                if (resolve) {
                    $scope.userInfo = false;
                    $scope.githubUser = resolve[0].data;
                    $scope.followers = resolve[1].data;
                    $scope.reqs = resolve[2].data.rate;
                    if ($scope.githubUser.followers > 30) {
                        $scope.loadMore = false;
                        $scope.restart = true;
                    } else {
                        $scope.loadMore = true;
                        $scope.restart = false;
                    }
                } else {
                    $scope.available = $scope.available ? false : true;
                }
            });
    };

    $scope.startOver = function () {
        $state.reload();
    };

    $scope.moreFollowers = function () {
        pageCount++;
        var nextPage = $http.get("https://api.github.com/users/" + $scope.User + "/followers?page=" + pageCount),
            requestsRemaining = $http.get("https://api.github.com/rate_limit");
        $q.all([nextPage, requestsRemaining])
            .then(function (resolve) {
                $scope.pagination = resolve[0].data;
                $scope.reqs = resolve[1].data.rate;
                console.log(resolve);
                if ($scope.pagination.length < 30) {
                    pageCount = 1;
                    $scope.loadMore = true;
                    $scope.restart = false;
                    // $scope.startOver = function () {
                    //     $state.reload();
                    // };
                }
            });
    };
}]);
app.controller("HomeController", ["$scope", "$http", "$state", "$q", function ($scope, $http, $state, $q) {

    "use strict";
    var pageCount = 1,
        rateLimit = "https://api.github.com/rate_limit",
        githubAPI = "https://api.github.com/users/";
    $scope.userInfo = true;
    $scope.available = true;
    $scope.loadMore = true;
    $scope.restart = true;
    $scope.nextPayload = true;
    $scope.loader = true;
    $scope.loader2 = true;

    $scope.search = function () {
        $scope.loader = false;
        pageCount = 1;
        var githubUser = $http.get(githubAPI + $scope.User),
            followers = $http.get(githubAPI + $scope.User + "/followers"),
            requestsRemaining = $http.get(rateLimit);
        $q.all([githubUser, followers, requestsRemaining])
            .then(function (resolve) {
                if (resolve) {
                    $scope.userInfo = false;
                    $scope.nextPayload = true;
                    $scope.loader = true;
                    $scope.githubUser = resolve[0].data;
                    $scope.followers = resolve[1].data;
                    $scope.reqs = resolve[2].data.resources.core;
                    if ($scope.githubUser.followers > 30) {
                        var i = $scope.githubUser.followers;
                        console.log(i);
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

    $scope.moreFollowers = function () {
        $scope.loader2 = false;
        pageCount++;
        var nextPage = $http.get($scope.githubUser.followers_url + "?page=" + pageCount),
            requestsRemaining = $http.get(rateLimit);
        $q.all([nextPage, requestsRemaining])
            .then(function (resolve) {
                $scope.loader2 = true;
                $scope.nextPayload = false;
                $scope.pagination = resolve[0].data;
                $scope.reqs = resolve[1].data.rate;
                if ($scope.pagination.length < 30) {
                    pageCount = 1;
                    $scope.loadMore = true;
                    $scope.restart = false;
                }
            });
    };
    $scope.startOver = function () {
        $state.reload();
    };

}]);
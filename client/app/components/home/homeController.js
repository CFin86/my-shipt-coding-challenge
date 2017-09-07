app.controller("HomeController", ["$scope", "$http", "$state", "$q",
        function ($scope, $http, $state, $q) {
    "use strict";
    var pageCount = 1,
        githubAPI = "https://api.github.com/users/";
    //hides most everything in the homeView 
    $scope.userInfo = true;
    $scope.uNameAvailable = true;
    $scope.loadMore = true;
    $scope.restart = true;
    $scope.nextPayload = true;
    $scope.loadingWheel = true;
    $scope.loadingWheel2 = true;
  
// the massive search function. Because most of the API calls are done client side, 
// a  
    $scope.inputValue = null;
    $scope.search = function (User) {
        $scope.loadingWheel = false;
        pageCount = 1;
        var githubUser = $http.get(githubAPI + User),
            followers = $http.get(githubAPI + User + "/followers");

        $q.all([githubUser, followers])
            .then(function (resolve) {
                if (resolve) {
                    $scope.userInfo = false;
                    $scope.uNameAvailable = true;
                    $scope.nextPayload = true;
                    $scope.loadingWheel = true;
                    $scope.githubUser = resolve[0].data;
                    $scope.followers = resolve[1].data;
                    if ($scope.githubUser.followers > 30) {
                        $scope.loadMore = false;
                        $scope.restart = true;
                    }
                }
            }).catch(function () {
                $scope.userInfo = true;
                $scope.uNameAvailable = false;
                $scope.nextPayload = true;
                $scope.loadingWheel = true;
                $scope.loadMore = true;
                $scope.restart = true;
            });
    };


    $scope.moreFollowers = function () {
        $scope.loadingWheel2 = false;
        pageCount++;
        $http.get($scope.githubUser.followers_url + "?page=" + pageCount)
            .then(function (resolve) {
                $scope.loadingWheel2 = true;
                $scope.nextPayload = false;
                $scope.pagination = resolve.data;
                    // $scope.reqs = resolve[1].data.rate;
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
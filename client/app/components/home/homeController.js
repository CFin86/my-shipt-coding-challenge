app.controller("HomeController", ["$scope", "$http", "$state", "$q", "User",
        function ($scope, $http, $state, $q, User) {
    "use strict";
    $scope.User = User.query();
    console.log($scope.User);
    var pageCount, githubAPI, githubUser, followers;

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
        pageCount = 1;
        githubAPI = "https://api.github.com/users/";
        githubUser = $http.get(githubAPI + User);
        followers = $http.get(githubAPI + User + "/followers");

        $scope.loadingWheel = false;
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
                    } else {
                        $scope.loadMore = true;
                        $scope.restart = false;
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
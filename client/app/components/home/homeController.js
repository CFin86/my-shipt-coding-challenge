app.controller("HomeController", ["$scope", "$http", "$state", "$q",
        function ($scope, $http, $state, $q) {
    "use strict";
    var pageCount = 1,
        githubAPI = "https://api.github.com/users/";
    //most everything in the homeView 
    $scope.userInfo = true;
    $scope.available = true;
    $scope.loadMore = true;
    $scope.restart = true;
    $scope.nextPayload = true;
    $scope.loader = true;
    $scope.loader2 = true;
    $scope.inputValue = null;

        $scope.search = function (User, resolve, error) {
            $scope.loader = false;
            pageCount = 1;
            var githubUser = $http.get(githubAPI + User),
                followers = $http.get(githubAPI + User + "/followers");
                
            $q.all([githubUser, followers])
                .then( function(resolve, error) {
                    console.log(User)
                    if (resolve) {
                        $scope.userInfo = false;
                        $scope.nextPayload = true;
                        $scope.loader = true;
                        $scope.githubUser = resolve[0].data;
                        $scope.followers = resolve[1].data;
                        if ($scope.githubUser.followers > 30) {
                            $scope.loadMore = false;
                            $scope.restart = true;
                        } else {
                            $scope.loadMore = true;
                            $scope.restart = false;
                        }
                    } else if (error)  {
                        $scope.available = $scope.available ? false : true;
                    }
                });
        };

        $scope.moreFollowers = function () {
            $scope.loader2 = false;
            pageCount++;
            $http.get($scope.githubUser.followers_url + "?page=" + pageCount)
                .then(function (resolve) {
                    $scope.loader2 = true;
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

    }
]);
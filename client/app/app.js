var app = angular.module("app", ["ui.router", "ngResource", "app.services", "app.factories"]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    "use strict";
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'content': {
                    templateUrl: 'app/components/home/homeView.html',
                    controller: 'HomeController'
                }
            }
        });
    $urlRouterProvider.otherwise('/');
});
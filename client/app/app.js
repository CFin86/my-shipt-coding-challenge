var app = angular.module("app", ["ui.router", "ngResource", "app.services", "app.factories"]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    "use strict";
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'header': {
                    templateUrl: 'app/components/core/header/navbarView.html',
                    controller: 'NavbarController'
                },
                'content': {
                    templateUrl: 'app/components/home/homeView.html',
                    controller: 'HomeController'
                },
                'footer': {
                    templateUrl: 'app/components/core/footer/footerView.html',
                    controller: 'HomeController'
                }
            }
        });
    $urlRouterProvider.otherwise('/');
});
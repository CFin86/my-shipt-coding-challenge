var app = angular.module("boiler", ["ui.router", "ngResource", "boiler.services", "boiler.factories"]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $uiViewScrollProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'content': {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController'
                }
            }
        });
    $urlRouterProvider.otherwise('/');
});
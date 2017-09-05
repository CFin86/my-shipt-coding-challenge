angular.module('app.services', [])
.service('SEOService', ['$rootScope', function ($rootScope) {
   "use strict";
    this.setSEO = function (data) {
        $rootScope.seo = {};
        for (var p in data) {
            $rootScope.seo[p] = data[p];
        }
    }
}]);
'use strict';

/* App Module */
var myApp = angular.module('myApp', ['ngRoute', 'controllers', 'firebase'])
.constant('FIREBASE_URL', 'https://ipet.firebaseio.com/');

myApp.run(['$rootScope', '$location',
    function ($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function (event, next, previous, error) {
            if (error == 'AUTH_REQUIRED') {
                $rootScope.message = "Sorry, you must login in to access this page";
                $location.path('/login');
            }
        })
}]);

myApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
        when('/index', {
          templateUrl: 'views/home.html',
          controller: 'RegistrationCtrl'
        }).
        when('/profile', {
          templateUrl: 'views/profile.html',
          controller: 'RegistrationCtrl'
        }).
        when('/games', {
          templateUrl: 'views/games.html',
          controller: 'RegistrationCtrl'
        }).
        when('/achievements', {
          templateUrl: 'views/achievements.html',
          controller: 'RegistrationCtrl'
        }).
        otherwise({
          redirectTo: '/index'
        });
}]);


//Copyright (c) 2013 Justin Klemm
myApp.filter('orderObjectBy', function () {
    return function (items, field, reverse) {
        var filtered = [];
        angular.forEach(items, function (item) {
            filtered.push(item);
        });
        filtered.sort(function (a, b) {
            return (a[field] > b[field] ? 1 : -1);
        });
        if (reverse) filtered.reverse();
        return filtered;
    };
});

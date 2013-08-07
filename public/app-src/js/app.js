'use strict';

var mainApp = angular.module('myApp', [
  // controller dependencies
  'controller.main',
  'controller.profile'

  // service dependencies
]);

mainApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.
      when('/profile', {
        templateUrl: 'partials/profile' + '/?debug',
        controller: 'ProfileCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });

  $locationProvider.html5Mode(true);
}]);

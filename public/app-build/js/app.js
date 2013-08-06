'use strict';

var mainApp = angular.module('myApp', [
  'controller.main',
  'controller.profile'
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


var mainCtrl = angular.module('controller.main', []);

mainCtrl.controller('MainCtrl', ["$scope", function ($scope) {
  $scope.message = "Hello World.";
}]);



var profileCtrl = angular.module('controller.profile', []);

profileCtrl.controller('ProfileCtrl', ["$scope", function ($scope) {
  $scope.message = "The profile view.";
}]);


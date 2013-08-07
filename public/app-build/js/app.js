'use strict';

var mainApp = angular.module('myApp', [
    // constants
    'constant.routes'
  ,
    // controller
    'controller.main',
    'controller.profile'

    // service
]);

/*
var routes = [
  {
    mapping: '/profile',
    templateUrl: 'partials/profile' + '/?debug',
    controller: 'ProfileCtrl'
  },
  {
    mapping: '/asd',
    templateUrl: 'partials/profile' + '/?debug',
    controller: 'ProfileCtrl'
  }
];
*/


mainApp.config(['$routeProvider', '$locationProvider', 'routes', function ($routeProvider, $locationProvider, routes) {

  // iterate over the routes (configured as constants in routes.js)
  _.forEach(routes, function (route) {

    $routeProvider.
        when(route.mapping, {
          templateUrl: route.templateUrl,
          controller: route.controller
        });
  });


  $routeProvider.otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true);
}]);

(function () {

  var mainCtrl = angular.module('controller.main', []);

  mainCtrl.controller('MainCtrl', ["$scope", function ($scope) {
    $scope.message = "Hello World.";
  }]);

})();


(function () {

  var profileCtrl = angular.module('controller.profile', []);

  profileCtrl.controller('ProfileCtrl', ["$scope", function ($scope) {
    $scope.message = "The profile view.";
  }]);

})();

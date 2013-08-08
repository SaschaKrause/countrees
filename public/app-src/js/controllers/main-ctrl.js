angular.module('controller.main', []).controller('MainCtrl', ["$scope", 'RestService', function ($scope, RestService) {
  "use strict";

  $scope.message = "Hello World.";
  $scope.dings = RestService.answer;
}]);


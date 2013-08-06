
var mainCtrl = angular.module('controller.main', []);

mainCtrl.controller('MainCtrl', ["$scope", function ($scope) {
  $scope.message = "Hello World.";
}]);


angular.module('controller.main', []).controller('MainCtrl', ["$scope", 'AbstractRestService', function ($scope, AbstractRestService) {
  "use strict";

  $scope.message = "Hello World.";
}]);


// TODO: add the "controller.{%= name %}"-module dependency to your mainApp ({%= angularMainAppFilePath %})
angular.module('controller.{%= name %}', []).controller('{%= capitalizedName %}{%= capitalizedSuffix %}', ["$scope", function ($scope) {
  "use strict";

  $scope.message = "Hello World.";
}]);

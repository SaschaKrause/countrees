(function(){

  // TODO: add the "controller.{%= name %}"-module dependency to your mainApp ({%= angularMainAppFilePath %})
  var ctrlModule = angular.module('controller.{%= name %}', []);

  ctrlModule.controller('{%= capitalizedName %}{%= capitalizedSuffix %}', ["$scope", function ($scope) {
    $scope.message = "Hello World.";
  }]);

})();

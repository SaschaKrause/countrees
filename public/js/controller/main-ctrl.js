define(['angular'], function (angular) {
  'use strict';

  return angular.module('controller.main', [])
    // Sample controller where service is being used
      .controller('MainCtrl', ["$scope", function($scope){
        $scope.message = "Hello World.";
      }]);

});
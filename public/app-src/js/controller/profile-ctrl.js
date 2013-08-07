(function () {

  var profileCtrl = angular.module('controller.profile', []);

  profileCtrl.controller('ProfileCtrl', ["$scope", function ($scope) {
    $scope.message = "The profile view.";
  }]);

})();

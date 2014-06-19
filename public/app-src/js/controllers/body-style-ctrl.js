/**
 * This contorller has only one purpose: 
 * Retrieving the page route name/state, so that the pages 'body'-class can be determined.
 **/
angular.module("controller.misc.bodystyle", []).controller("BodyStyleCtrl",['$scope', '$state', function($scope, $state){

	$scope.pageName = '';
	
	// notify that the routing state has changed so we can highlight the corresponding navigation button
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    $scope.pageName = toState.name.replace('.','_');
   });
}]);
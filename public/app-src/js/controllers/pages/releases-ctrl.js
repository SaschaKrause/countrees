angular.module('controller.page.releases', []).controller('ReleasesCtrl', ["$scope", 'ReleaseService', '$state', '$stateParams', function ($scope, ReleaseService, $state, $stateParams) {
  "use strict";

	$scope.page = {
		releases: null,
		detailedRelease: null
	};

	init();

	$scope.$watch('stateParams', function() {
		if($stateParams.releaseId) {
			$scope.loadDetailedReleaseFromId($stateParams.releaseId);	
		}
	})

	function init() {
		ReleaseService.getAllReleases(function onSuccess(releasesHash) {
	  	$scope.page.releases = releasesHash;
	  });
	}


  $scope.showDetailedRelease = function(releaseId) {
  	$state.go('counter-detail.release', {releaseId: releaseId});
  }


  $scope.loadDetailedReleaseFromId = function(releaseId) {
  	ReleaseService.getReleaseFromId(releaseId, function onSuccess(releaseData) {
	  	$scope.page.detailedRelease = releaseData;
	  });
  	
  }
}]);

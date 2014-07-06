angular.module('controller.page.releases', []).controller('ReleasesCtrl', ["$scope", 'ReleaseService', '$state', '$stateParams', 'CountreeService', '$q', 
	function ($scope, ReleaseService, $state, $stateParams, CountreeService, $q) {
  "use strict";

	$scope.page = {
		overview: {
			releases: null
		},
		detailed: {
			release: null,
			countree: null,
			countResult: null,
		}
	};

	initOverview();

	$scope.$watch('stateParams', function() {
		if($stateParams.releaseId) {

			loadDetailedReleaseFromId($stateParams.releaseId)
					.then($scope.startCountree);
		}
	});

	// $rootScope.$on('$stateChangeStart', 
	// 	function(event, toState, toParams, fromState, fromParams){ 
	// 		console.
	// 	}
	// );



	function initOverview() {
		ReleaseService.getAllReleases(function onSuccess(releasesHash) {
	  	$scope.page.overview.releases = releasesHash;
	  });
	}


  $scope.showDetailedRelease = function(releaseId) {
  	$state.go('counter-detail.release', {releaseId: releaseId});
  }


  $scope.startCountree =function(countreeRef) {
  	countreeRef.start();
  }


  $scope.stopCountree =function() {
  	$scope.page.detailed.countree.stop();
  }


  function loadDetailedReleaseFromId(releaseId) {
  	var deferred = $q.defer();

  	ReleaseService.getReleaseFromId(releaseId, function onSuccess(releaseData) {
	  	$scope.page.detailed.release = releaseData;
	  	$scope.page.detailed.countree = CountreeService.getCountreeFromDate(new Date(releaseData.default.release_date));
	  	$scope.page.detailed.countree.subscribeOnInterval("ui", onCountIntervalDoUI);
	  	deferred.resolve($scope.page.detailed.countree);
	  });

	  function onCountIntervalDoUI(countResult) {
	  	
	  	setTimeout(
	  		function() {
	  			$scope.$apply(function() {
	  				$scope.page.detailed.countResult = countResult;	
	  			}
	  		);}
	  	);
	  	// console.log($scope.page.detailed.countResult);
	  }
  	
  	return deferred.promise;
  }
}]);

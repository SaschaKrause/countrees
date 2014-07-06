// TODO: add the "service.rest"-module dependency to your mainApp (public/app-src/js/app.js)
angular.module('service.release', []).factory('ReleaseService',['$http', 'AbstractRestService', function($http, AbstractRestService) {
	"use strict";
	var service = {
		PATH_RELEASES: '/releases.json',
	};
	


	service.getAllReleases = function(onSuccess, onError) {
		AbstractRestService.get(this.PATH_RELEASES, onSuccess, onError);
	};

	service.getReleaseFromId = function(releaseId, onSuccess, onError) {
		AbstractRestService.get('/releases/'+releaseId+'.json', onSuccess, onError);
	};
	
	return service;
}]);

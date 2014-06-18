// TODO: add the "service.rest"-module dependency to your mainApp (public/app-src/js/app.js)
angular.module('service.abstract-rest', []).factory('AbstractRestService',['$http', function($http) {
	
	var service = {
		URL: BACKEND_URL // set in index.jade (index_debug.jade)
	};



	/**
	* Generic GET request method that provides the Authentication Token as header by default.
	*/
	service.get = function(path, onSuccess, onError, options, requestStatus) {
		$http.get(this.URL + path, getConfig()).success(function(data, status, headers, config){			
			onSuccess && onSuccess(data, status, headers, config);
		}).error(function(data, status){
			onError && onError(data, status);
		});
	}


	/**
	* Provding the headers. Especially the authentication headers are important
	*/
	function getConfig() {
		return {
			headers: {
				'Auth-Token': 'test'
			}
		};
	}

  return service;
}]);
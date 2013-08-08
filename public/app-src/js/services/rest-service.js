// TODO: add the "service.rest"-module dependency to your mainApp (public/app-src/js/app.js)
angular.module('service.rest', []).factory('RestService',['$http', function($http) {
  var service = {};

  $http.jsonp('http://www.omdbapi.com/?s=back&callback=JSON_CALLBACK').success(function(result) {
    console.log(result);
  });
  service.answer = 42;
  return service;
}]);
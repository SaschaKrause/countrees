// TODO: add the "service.{%= name %}"-module dependency to your mainApp ({%= angularMainAppFilePath %})
angular.module('service.{%= name %}', []).factory('{%= capitalizedName %}{%= capitalizedSuffix %}',[function() {
  var service = {};

  service.answer = 42;
  return service;
}]);
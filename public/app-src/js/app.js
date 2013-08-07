(function () {
  "use strict";

  var mainApp = angular.module('myApp', [
    // config
    'config.routes',

    // controller
    'controller.main',
    'controller.profile'

    // service
  ]);


  mainApp.config(['$routeProvider', '$locationProvider', 'routesCfg', function ($routeProvider, $locationProvider, routesCfg) {

    // iterate over the routes (configured as constants in config/routes-cfg.js)
    _.forEach(routesCfg, function (route) {
      $routeProvider.
          when(route.mapping, {
            templateUrl: route.templateUrl,
            controller: route.controller
          });
    });

    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  }]);

})();


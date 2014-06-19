(function () {
  "use strict";

  var mainApp = angular.module('myApp', [
      // lib
      'ui.router',

      // config
      'config.routes',

      // controller
      'controller.page.releases',

      'controller.include.navigation',
      'controller.misc.bodystyle',
      
      'controller.main',
      'controller.profile',

      // service
      'service.abstract-rest',
      'service.release'
  ]);


   mainApp.config(['$stateProvider', '$urlRouterProvider', 'routesCfg', function ($stateProvider, $urlRouterProvider, routesCfg) {

    // iterate over the routes (configured as constants in config/routes-cfg.js)
    _.forEach(routesCfg, function (route) {
      $stateProvider.
          state(route.state, {
            url: route.url,
            templateUrl: route.templateUrl,
            controller: route.controller, 
            views : route.views
          });
    });
    
    $urlRouterProvider.otherwise("/init"); 

  }]);


  mainApp.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
  }]);
     

})();


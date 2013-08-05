// Require JS  Config File

require.config({
  paths: {
    "angular": "lib/bower/angular/angular",
    "jquery": "lib/bower/jquery/jquery"
  },
  shim: {
    angular: {
      exports: "angular"
    }
  },
  baseUrl: 'js/'
});


require([
  'angular',
  'app'
], function (angular, app) {
  'use strict';
  angular.bootstrap(document, [app['name']]);
});
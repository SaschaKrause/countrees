angular.module("config.routes", []).constant('routesCfg', [
    {
      mapping: '/profile',
      templateUrl: 'partials/profile' + '/?debug',
      controller: 'ProfileCtrl'
    }
  ]);


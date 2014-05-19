
angular.module("config.routes", []).constant('routesCfg', [

		// layouts
		{
			state: 'app',
			abstarct: true,
			templateUrl: 'partials/layout_app'
		},
		{
			state: 'plain',
			abstarct: true,
			templateUrl: 'partials/plain-layout'
		},
		{
			state: 'slim',
			abstarct: true,
			templateUrl: 'partials/slim-layout'
		},

		// user
		{state: 'app.profile',															url: '/profile',																					views: {"content": {templateUrl: 'partials/profile',																controller: 'ProfileCtrl' } } },
		{state: 'app.initialisation-main',									url: '/init',																							views: {"content": {templateUrl: 'partials/init',																		controller: 'ProfileCtrl'} } },
	]);

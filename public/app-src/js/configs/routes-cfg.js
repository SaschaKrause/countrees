
angular.module("config.routes", []).constant('routesCfg', [

		// layouts
		{
			state: 'app',
			abstarct: true,
			templateUrl: 'partials/layout_app'
		},
		{
			state: 'list',
			abstarct: true,
			templateUrl: 'partials/layout_list'
		},
		{
			state: 'counter-detail',
			abstarct: true,
			templateUrl: 'partials/layout_counter-detail'
		},

		// releases
		{state: 'list.releases',														url: '/release/list',																			views: {"content": {templateUrl: 'partials/list_releases',													controller: 'ReleasesCtrl' } } },

		{state: 'counter-detail.release',										url: '/releases/{releaseId}',															views: {"content": {templateUrl: 'partials/counter-detail_release',									controller: 'ReleasesCtrl' } } },

		{state: 'app.profile',															url: '/profile',																					views: {"content": {templateUrl: 'partials/profile',																controller: 'ProfileCtrl' } } },
		{state: 'app.initialisation-main',									url: '/init',																							views: {"content": {templateUrl: 'partials/init',																		controller: 'ProfileCtrl'} } },
	]);

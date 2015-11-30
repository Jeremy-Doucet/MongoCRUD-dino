(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial'])
	.config(Config);

	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: '/templates/home.html',
      controller: 'HomeController as vm'
		}).state('CreateDino', {
			url: '/Dino/Create',
			templateUrl: '/templates/create_dino.html',
			controller: 'CreateDinoController as vm'
		});
		$urlRouterProvider.otherwise('/');
	}
})();

'use strict';

var userManager = angular.module('personManager', 
	['ngRoute', 'managerControllers', 'managerServices', 'managerFilters'])
.constant("appConfig", {
	"api_key": "30aa04e510115263def50e2092c99255",
	"secret": "d89088c4ba7489d6"
});

userManager.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider
		.when('/', {
			templateUrl: 'partials/main.html',
			controller: 'ManagerListCtrl',
		})
		.otherwise({
			redirectTo: '/'
		});

	}]);
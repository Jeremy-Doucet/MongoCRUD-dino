(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	function HomeFactory($http, $q) {
		var o = {};

		o.createDino = function(dino) {
			var q = $q.defer();
			$http.post('/api/v1/dino', dino).then(function() {
				q.resolve();
			});
			return q.promise;
		};

		return o;
	}
})();

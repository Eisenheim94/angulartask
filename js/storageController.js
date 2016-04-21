
app.factory('taskStorage', function ($http, $injector) {
	'use strict';

	return $http.get('/api')
		.then(function () {
			return $injector.get('api');
		}, function () {
			return $injector.get('ngStorage');
		});
})
.factory('ngStorage', function ($q) {
	'use strict';


	var store = {
		posts: ngStorage.posts;
	};

	return store;
});


app.factory('PostsStorage', [ '$rootScope', '$localStorage', function( $rootScope, $localStorage ) {

	if ( !$rootScope.$storage ) {
		$rootScope.$storage = $localStorage;
	}

	return {

		listPosts: function() {
			return  $rootScope.$storage.posts;
		}
	};
}]);
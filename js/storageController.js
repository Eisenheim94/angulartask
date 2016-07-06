
app.factory('PostsStorage', [ '$rootScope', '$localStorage', function( $rootScope, $localStorage ) {

//	if ( typeof $rootScope.$storage != "undefined" && !$rootScope.$storage ) {
	if ( !$rootScope.$storage ) {
		$rootScope.$storage = $localStorage;
	}

	return {

		listPosts: function() {
			if($rootScope.$storage.posts)
				return  $rootScope.$storage.posts;
			else
				return [];
		}
	};
}]);
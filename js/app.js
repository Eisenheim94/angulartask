/*
 * Author: Demyd Ganenko
 * GitHub: https://github.com/Eisenheim94
 * Email: ganenko94@gmail.com
 */

var app = angular.module("task", ["ngStorage"]);

app.factory('$exceptionHandler', function() {
	return function(exception, cause) {
		exception.message += ' (caused by "' + cause + '")';
		throw exception;
	};
});

app.controller("TaskCtrl", function($scope, $localStorage, $filter, PostsStorage) {
	
	
	$scope.posts = PostsStorage.listPosts();
	
	$scope.currentPost = $scope.posts.length > 0 ? $scope.posts[0] : false;
	
	$scope.items = [];
	
	$scope.savePosts = function() {
		$localStorage.posts = $scope.posts;
	}

	$scope.loadPost = function(post) {
		
		$scope.currentPost = post;
		
	}
});

app.directive('addComment', function() {
	return {
		restrict: 'A',
		require: 'ngModel',
		priority: 1,
		link: function ($scope, element, attrs, ngModel) {
			element.on("click", function(event){
				event.preventDefault();
				$scope.$apply(function() {
					$scope.currentPost.comments.push(angular.copy(ngModel.$modelValue));
					
					$scope.addComm = {};
				});
			});
		}
	}
});

app.directive('addPost', function() {
	return {
		restrict: 'A',
		require: 'ngModel',
		priority: 1,
		link: function ($scope, element, attrs, ngModel) {
			element.on("click", function(event){
				event.preventDefault();
				$scope.$apply(function() {
		
					$scope.newPost.comments = [];

					$scope.newPost.parent = angular.isUndefined($scope.newPost.parent) ? false : $scope.newPost.parent;

					$scope.posts.push(angular.copy($scope.newPost));

					$scope.loadPost($scope.newPost);
					
					$scope.newPost = {};
					
					$scope.savePosts();
				});
			});
		}
	}
});
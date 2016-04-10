/*
 * Author: Demyd Ganenko
 * GitHub: https://github.com/Eisenheim94
 * Email: ganenko94@gmail.com
 */

var app = angular.module("task", ["ngStorage"]);

app.controller("TaskCtrl", function($scope, $localStorage, $filter) {

	
	$scope.posts = $localStorage.posts;
	if(angular.isUndefined($scope.posts))
		$scope.posts = [];
	
	$scope.currentPost = $scope.posts.length > 0 ? $scope.posts[0] : false;
	
	$scope.items = [];

	$scope.addPost = function(newPost) {
		
		newPost.comments = [];
		
		newPost.parent = angular.isUndefined(newPost.parent) ? false : newPost.parent;
		
		$scope.posts.push(angular.copy(newPost));
		
		$scope.loadPost(newPost);
		
		$localStorage.posts = $scope.posts;
		
	}

	$scope.addComment = function(addComm) {
		
		$scope.currentPost.comments.push(angular.copy(addComm));
		
	}

	$scope.loadPost = function(post) {
		
		$scope.currentPost = post;
		
	}
});
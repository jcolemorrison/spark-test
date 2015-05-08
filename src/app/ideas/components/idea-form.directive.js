'use strict';

/**
 * Directive for the idea submission form
 */

angular.module('ideasApp')
	.directive('ideaForm', [function () {
		return {
			restrict: 'E',
			templateUrl: 'app/ideas/components/idea-form.tpl.html',
			replace: true,
			controller: ['$scope', '$rootScope', function ($scope, $rootScope) {

				var user = $scope.currentUser;

				// for fields
				$scope.idea = {};

				$scope.idea.anon = false;

				// default location
				$scope.idea.location = {
					name: 'All',
					val: 'all'
				};

				// for setting the current office
				$scope.getLocation = function (location) {
					if (location === undefined) {
						$scope.idea.location = {
							name: 'All',
							val: 'all'
						};
						return false;
					}
					$scope.idea.location = location;
				};

				$scope.submit = function () {

					var newIdea = {
						date: new Date().getTime(),
						location: $scope.idea.location.val,
						status: 'New',
						title: $scope.idea.title,
						description: $scope.idea.description,
						loved: {
							total: 0,
							currentUser: true
						},
						commentCount: 0
					};

					if ($scope.idea.anon) {
						newIdea.author = {
							name: 'Anonymous'
						};
					} else {
						newIdea.author = {
							name: user.name,
							image: user.image,
							title: user.title
						};
					}



					// build the object
					$rootScope.ideas.push(newIdea);

					$scope.ideasCtrl.refreshLocations(newIdea.location);
					$scope.ideasCtrl.refreshStatuses();


					// reset scope
					$scope.idea = {};

					$scope.idea.anon = false;

					$scope.idea.location = {
						name: 'All',
						val: 'all'
					};

					// toggle the mobile form if necessary
					if ($scope.ideasCtrl.mobileForm) {
						$scope.ideasCtrl.mobileForm = false;
					}
					
					
				};
			}]
		};
	}]);
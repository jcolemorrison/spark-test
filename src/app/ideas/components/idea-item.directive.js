'use strict';
/**
 * Directive for each individual submitted idea
 */

angular.module('ideasApp')
	.directive('ideaItem', ['$window', function ($window) {

		return {
			return: 'E',
			templateUrl: 'app/ideas/components/idea-item.tpl.html',
			controller: ['$scope', 'truncateTextFilter', function ($scope, truncateTextFilter) {
					
				// for loving things
				$scope.loveIt = function () {
					$scope.idea.loved.currentUser = true;
				};

				$scope.truncate = function (text) {
					return truncateTextFilter(text, 90);
				};
				$scope.item = {
					expand: false
				};
			}],
			link: function (scope, element) {

				// this doesn't occur on screen resize
				// because there's no point in adding
				// all of these listeners and eating
				// up memory in ng-repeat if we don't
				// need to.

				// deals with showing text mobile wise
				var originalText = scope.idea.description,
						shortText,
						moreToggle;

				// check initial window width
				var windowW = $window.innerWidth;

				// small screen?  less text. more work.
				if (windowW <= 500) {

					shortText = scope.truncate(scope.idea.description);
					scope.ideaText = shortText;

					moreToggle = element.find('.idea-description-more');

					// if the window is small, we'll listen for
					// the click

					moreToggle.bind('click', function () {
						// tell angular things happened
						scope.$apply(function () {
							scope.item.expand = true;
							scope.ideaText = originalText;
						});
					});

				} else { // otherwise, give the whole thing
					scope.ideaText = originalText;
				}


				// modifying the item

			}
		};
	}]);
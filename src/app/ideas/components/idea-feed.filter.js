'use strict';

/**
 * A custom filter to sort through the idea feed
 */
angular.module('ideasApp')
	.filter('ideaFeedFilter', [function () {
		return function (ideas, filterBy) {
			var out = [];

			var l = ideas.length,
					hasStatus = false,
					hasLocation = false,
					curr; // cache

			// loop through each object
			while (l--) {

				curr = ideas[l];

				// check for status or the ALL option
				// find by object lookup instead of loop!
				if (
					filterBy.status[ideas[l].status] ||
					filterBy.status.All
				) {
					hasStatus = true;
				}

				if (
					filterBy.locations[ideas[l].location] ||
					filterBy.locations.All
				) {
					hasLocation = true;
				}

				if (hasLocation && hasStatus) {
					out.push(curr);
				}

				//reset flags
				hasLocation = false;
				hasStatus = false;

			}

			return out;

		};
	}]);
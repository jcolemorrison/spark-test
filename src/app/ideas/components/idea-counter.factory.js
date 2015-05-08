'use strict';

/**
 * Factory for updating counts in the filters bar
 * based on the total number of ideas
 */

angular.module('ideasApp')
	.factory('updateCounts', ['$rootScope', function ($rootScope) {

		// local status count
		// 
		var incrementLocation = function (locationVal) {
			var locs = $rootScope.locations;
			var l = locs.length;
			while (l--) {
				if (locs[l].val === locationVal) {
					locs[l].count += 1;
				}
			}
		};
		

		// searches for a count property
		// and adds them together
		var locationCounts = function () {
			var array = $rootScope.locations;
			var l = array.length;
			var total = 0;
			while (l--) {
				total += array[l].count;
			}
			return total;
		};

		var statusCounts = function (array) {

			var status = {
				'all': 0,
				'Progress': 0,
				'New': 0,
				'Accepted': 0,
				'Completed': 0
			};

			var l = array.length;
			
			while (l--) {
				status[array[l].status] += 1;
				status.all += 1;
			}

			return status;

		};

		return {
			locationCounts: locationCounts,
			statusCounts: statusCounts,
			incrementLocation: incrementLocation
		};
	}]);
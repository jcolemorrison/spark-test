'use strict';

// The big brother for the ideas view.  This exists
// primarily to share a common scope between the different
// directives, views, and templates within the ideas section
angular.module('ideasApp')
	.controller('IdeasCtrl', ['$scope', 'updateCounts', function ($scope, updateCounts) {

		// Mobile State Vars
		this.mobileForm = false;
		this.mobileFilters = false;

		// Idea Feed Filter Counters
		var filters = this.filters = {};

		filters.locations = {};

		filters.locations.total = $scope.ideas.length;
		filters.status = updateCounts.statusCounts($scope.ideas);

		this.refreshLocations = function (location) {
			updateCounts.incrementLocation(location);
			filters.locations.total = $scope.ideas.length;
		};

		this.refreshStatuses = function () {
			filters.status = updateCounts.statusCounts($scope.ideas);
		};

		// used to filter the actual displayed items
		// we keep these on the main scope
		// so that we can reference them in child scopes
		var filterBy = this.filterBy = {};

		filterBy.status = {};
		filterBy.locations = {};

		// defaults
		filterBy.status.All = true;
		filterBy.locations.All = true;

	}]);

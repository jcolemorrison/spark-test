'use strict';

/**
 * A custom filter to trunacate text
 * this is only used when the screen size is small
 */

angular.module('ideasApp')
	.filter('truncateText', function () {
		return function (text, length, end) {

			if (isNaN(length)) {
				length = 140;
			}

			if (end === undefined) {
				end = '...';
			}

			if (text.length <= length || text.length - end.length <= length) {
				return text;
			}
			else {
				return String(text).substring(0, length - end.length) + end;
			}

		};
	});

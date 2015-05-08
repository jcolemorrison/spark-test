'use strict';

// custom checkbox directive
angular.module('ideasApp')
	.directive('checkbox', function () {
		return {
			// isolate scope
			scope: {},
			require: 'ngModel',
			restrict: 'E',
			templateUrl: 'app/components/checkbox/checkbox.tpl.html',
			link: function (scope, elem, attrs, modelCtrl) {
				scope.size = 'default';
				// Default Button Styling
				scope.stylebtn = {};
				// Default Checkmark Styling

				var trueValue = true;
				var falseValue = false;

				// If defined set true value
				if (attrs.ngTrueValue !== undefined) {
					trueValue = attrs.ngTrueValue;
				}
				// If defined set false value
				if (attrs.ngFalseValue !== undefined) {
					falseValue = attrs.ngFalseValue;
				}

				// Check if name attribute is set and if so add it to the DOM element
				if (scope.name !== undefined) {
					elem.name = scope.name;
				}

				// Update element when model changes
				scope.$watch(function() {
					if (modelCtrl.$modelValue === trueValue || modelCtrl.$modelValue === true) {
						modelCtrl.$setViewValue(trueValue);
					} else {
						modelCtrl.$setViewValue(falseValue);
					}
					return modelCtrl.$modelValue;
				}, function(/*newVal, oldVal*/) {
					scope.checked = modelCtrl.$modelValue === trueValue;
				}, true);

				// On click swap value and trigger onChange function
				elem.bind('click', function() {
					scope.$apply(function() {
						if(modelCtrl.$modelValue === falseValue) {
							modelCtrl.$setViewValue(trueValue);
						} else {
							modelCtrl.$setViewValue(falseValue);
						}
					});
				});
			}
		};
	});
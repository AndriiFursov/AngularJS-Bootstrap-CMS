/*
 * Common UI directives
 *
*/

// inputgroup with left header and right select
angular.module('travelAgency')

.directive('trAgInputgroupSelect', function() {
    return {
        restrict: 'E',
        scope: {
            igHeader: '=', // inputgroup header
            items:    '=', // items to select from
            ngModel:  '=', // selection
        },
        link: function(scope, element, attrs) {
//            element.on('click', function(event) {
//                event.preventDefault();
//            });
            var defaultIndex = attrs.setDefault;

            if (defaultIndex !== undefined && scope.items !== undefined) {
                scope.ngModel = scope.items[defaultIndex];
            } else {
                scope.selectedValue = 'Please select item';
            }

            // selection changed handler
            scope.onSelect = function(item) {
                scope.ngModel = item;
            };
        },
        templateUrl: 'components/templates/inputgroup-select.html'
    };
})

// inputgroup with left header, middle input and right select
.directive('trAgInputgroupInputSelect', function() {
    return {
        restrict: 'E',
        scope: {
            igHeader: '=', // inputgroup header
            items:    '=', // items to select from
            selectedValue:  '=ngModel', // selection
        },
        link: function(scope, element, attrs) {
//            element.on('click', function(event) {
//                event.preventDefault();
//            });
            var defaultIndex = attrs.setDefault;

            if (defaultIndex !== undefined && scope.items !== undefined) {
                scope.selectedValue = scope.items[defaultIndex];
            }

            // selection changed handler
            scope.onSelect = function(item) {
                scope.selectedValue = item;
            };
        },
        templateUrl: 'components/templates/inputgroup-input-select.html'
    };
})

// single select
.directive('trAgSelect', function() {
    return {
        restrict: 'E',
        scope: {
            items:    '=', // items to select from
            ngModel:  '=', // selection
        },
        link: function(scope, element, attrs) {
//            element.on('click', function(event) {
//                event.preventDefault();
//            });
            var defaultIndex = attrs.setDefault;

            if (defaultIndex !== undefined && scope.items !== undefined) {
                scope.ngModel = scope.items[defaultIndex];
                scope.selectedValue = scope.items[defaultIndex].name;
            }

            // selection changed handler
            scope.onSelect = function(item) {
                scope.selectedValue = item.name;
                scope.ngModel = item;
            };
        },
        templateUrl: 'components/templates/select.html',
        replace: true
    };
})

// inputgroup with left header and right datepicker
.directive('trAgInputgroupDatepicker', function() {
    return {
        restrict: 'E',
        scope: {
            igHeader:   '=', // inputgroup header
            departure:  '=ngModel', // selection
        },
        link: function(scope, element, attrs) {
            scope.popup = {
              opened: false
            };
            scope.dateOptions = {
                formatYear: 'yyyy',
                startingDay: 1
            };
            scope.format = 'dd.MM.yyyy';
            
            scope.open = function() {
                scope.popup.opened = true;
            };
            
            scope.$watch('dt', function(newValue) {
                if (newValue) {
                    var day = newValue.getDate(),
                        month = newValue.getMonth()+1;

                    day = ("" + day).length > 1 ? day : "0" + day;
                    month = ("" + month).length > 1 ? month : "0" + month;
                    
                    scope.departure = day + "." + month + "." 
                                    + newValue.getFullYear();
                } else {
                    scope.departure = "";
                }
            });
        },
        templateUrl: 'components/templates/inputgroup-datepicker.html'
    };
});

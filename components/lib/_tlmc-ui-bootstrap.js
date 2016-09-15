/*
 * based on angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/
 *
 * License: MIT
 */
 
angular.module("ui.bootstrap", ["ui.bootstrap.dropdown"]);
angular.module('ui.bootstrap.dropdown', [])

.service('uibDropdownService', ['$document', '$rootScope', function($document, $rootScope) {
    var openScope = null;

    this.open = function(dropdownScope, element) {
        if (!openScope) {
            $document.on('click', closeDropdown);
//            element.on('keydown', keybindFilter);
            openScope = dropdownScope;
        }
    };

    this.close = function(dropdownScope, element) {
        if (openScope === dropdownScope) {
            openScope = null;
            $document.off('click', closeDropdown);
//            element.off('keydown', keybindFilter);
        }
    };
    
    var closeDropdown = function(evt) {
        // This method may still be called during the same mouse event that
        // unbound this event handler. So check openScope before proceeding.
        if (!openScope) { return; }

        var openCondition1 = evt.target !== openScope.getToggleElement(),
            openCondition2 = evt.target.parentNode !== openScope.getToggleElement();
        if (openCondition1&&openCondition2) {
            openScope.isOpen = false;
        }
            openScope.$apply();
    };
}])

.controller('UibDropdownController', ['$scope', '$element', '$attrs', 'uibDropdownService', function($scope, $element, $attrs, uibDropdownService) {
    var self = this,
        scope = $scope.$new(), // create a child scope so we are not polluting original one
        openClass = 'open';
    
    this.toggle = function() {
        scope.isOpen = !scope.isOpen;
        return scope.isOpen;
    };

    scope.getToggleElement = function() {
        return self.toggleElement;
    };
    
    
    scope.$watch('isOpen', function(isOpen) {
        if ($element.hasClass(openClass) === !isOpen) {
            isOpen ? $element.addClass(openClass) : 
                     $element.removeClass(openClass);
        }
 

        if (isOpen) {
            uibDropdownService.open(scope, $element);
        } else {
            uibDropdownService.close(scope, $element);
        }
    });
    
}])

.directive('uibDropdown', function() {
  return {
    controller: 'UibDropdownController'
  };
})

.directive('uibDropdownMenu', function() {
    return {
        restrict: 'A',
        require: '^^uibDropdown',
        link: function(scope, element, attrs, dropdownCtrl) {
            if (!dropdownCtrl) {
                return;
            }
            
//            if (!dropdownCtrl.dropdownMenu) {
//                dropdownCtrl.dropdownMenu = element;
//            }
        }
    };
})

.directive('uibDropdownToggle', function() {
    return {
        restrict: 'A',
        require: '^^uibDropdown',
        link: function(scope, element, attrs, dropdownCtrl) {
            if (!dropdownCtrl) {
                return;
            }
            
            var toggleDropdown = function(event) {
//                event.preventDefault();
            
                if (!element.hasClass('disabled') && !attrs.disabled) {
                    scope.$apply(function() {
                        dropdownCtrl.toggle();
                    });
                }
            };
            
            dropdownCtrl.toggleElement = element[0];
            
            element.bind('click', toggleDropdown);
            
            scope.$on('$destroy', function() {
                element.unbind('click', toggleDropdown);
            });
        }
    };
});
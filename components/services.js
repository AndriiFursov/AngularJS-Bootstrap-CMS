/*
 * Common services
 *
*/

angular.module('travelAgency')

.factory('modalErrorService', ['$uibModal', function ($uibModal) {
    return function (message) {
        $uibModal.open({
            animation: true,
            templateUrl: 'components/templates/errorPopup.html',
            controller: ['$uibModalInstance', function($uibModalInstance) {
                self = this;
                self.message = message;
                
                self.ok = function () {
                    $uibModalInstance.dismiss();
                };
            }],
            controllerAs: 'errorModalCtrl',
        });
    } 
}])

.factory('modalSuccessService', ['$uibModal', function ($uibModal) {
    return function (message) {
        $uibModal.open({
            animation: true,
            templateUrl: 'components/templates/successPopup.html',
            controller: ['$uibModalInstance', function($uibModalInstance) {
                self = this;
                self.message = message;
                
                self.ok = function () {
                    $uibModalInstance.dismiss();
                };
            }],
            controllerAs: 'successModalCtrl',
        });
    } 
}]);
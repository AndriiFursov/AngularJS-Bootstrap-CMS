/*
 * Hotel controllers
 *
*/

angular.module('trAg.hotel').controller('trAgHotelController', ['$scope', '$uibModal', 'TrAgNewHotelService', 'modalErrorService', function($scope, $uibModal, TrAgNewHotelService, modalErrorService) {
    var self = this;
    

    self.initHotel = function () {
        self.newHotel = new TrAgNewHotelService;;
    }
    
    self.addItem = function(group) {
//        console.log(group);
        group.push({})
    }
    
    self.delItem = function(arr, item) {
        var elem = arr.indexOf(item);
        if (elem !== -1) {
            arr.splice(elem, 1);
        }
    }
        
//
    
    self.initHotel();
    self.newHotel.errorFields = {
        photo: false
    };
    
    
    if ($scope.creationCtrl) {
        $scope.creationCtrl.newHotel = self.newHotel;
        $scope.$on('tourCreation', function () {
            self.initHotel();
        });
    }

    
    // photos -start-
    self.addPhoto = function(src) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'current-hotel/templates/openPhotoPopup.html',
            controller: 'modalInstanceController',
            controllerAs: 'modalCtrl',
            scope: $scope
        });
        
        modalInstance.result.then(function(url) {
            var arr = self.newHotel.photos;
            arr.push(url);
            self.newHotel.errorFields = {photo: false};
        }, function(reason) {
            if (reason !== 'canceled') {
                modalErrorService(reason);
            }
        });
    };
    
    self.delPhoto = function(photo) {
        var arr = self.newHotel.photos,
            elem = arr.indexOf(photo);
        if (elem !== -1) {
            arr.splice(elem, 1);
        }
    };
    // photos -end-
}])

.controller('modalInstanceController', ['$uibModalInstance', '$http', '$scope', function ($uibModalInstance, $http, $scope) {
    self = this;
    self.url = "";
    
    self.ok = function () {
        var tourId = $scope.hotelCtrl.newHotel.photos[0] ? '': 
                     $scope.creationCtrl.newTour.id;
                     
        // send data to php scripts
        $http.get('http://travelingua.com.ua/php/tools.add-photo.php', 
        {params: {photo_url: self.url, tour_id: tourId}})
        .then(function(answ) {
            if (answ.data.type === "success") {
//                $uibModalInstance.close('http://travelingua.com.ua/tour-img/' + answ.data.file);
                $uibModalInstance.close(answ.data.file);
            } else {
                $uibModalInstance.dismiss(answ.data.message);
            }
        });
    };
    
    self.cancel = function () {
        $uibModalInstance.dismiss('canceled');
    };
}]);

/*
 * Tour creation controller
 *
*/

angular.module('trAg.tourCreation').controller('trAgTourCreationController', ['$scope', '$http', 'TrAgNewHotelService', 'modalErrorService', 'modalSuccessService', function($scope, $http, TrAgNewHotelService, modalErrorService, modalSuccessService) {
    var self = this;
    

    self.newTour = {};
    self.newHotel = {};
        
    self.createNewTour = function () {
        var errorFlag = {tour: false, hotel: false};
        
        
        // check hotel
        if (!self.newHotel.photos[0]) {
            self.newTour.testValidity();
            self.newHotel.errorFields.photo = true;
            errorFlag.hotel = true;
        }
        
        if (errorFlag.hotel) {
            modalErrorService('Please, add at least one image and check all required fields!');
            return;
        }
        
        
        //check tour
        if (!self.newTour.testValidity()) {
            errorFlag.tour = true;
        }
        
        if (errorFlag.tour) {
            modalErrorService('Please, check all required fields!');
            return;
        }
    
        $http.post('http://travelingua.com.ua/php/tools.create-new-tour.php',angular.toJson({tour: self.newTour, hotel: self.newHotel}))
        .then(function(answ) {
            if (answ.data.result === 'ok') {
                modalSuccessService('Information added successfully!');
                $scope.$broadcast('tourCreation');
            } else if (answ.data.result === 'error') {
                modalErrorService(answ.data.errorMessage);
            }
        });
    }
}]);
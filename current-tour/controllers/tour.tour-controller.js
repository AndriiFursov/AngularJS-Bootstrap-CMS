/*
 * Tour controller
 *
*/

angular.module('trAg.tour').controller('trAgTourController', ['$scope', 'trAgTourService', '$http', function($scope, trAgTourService, $http) {
    var self = this;
    

    self.initTour = function () {
        self.newTour = trAgTourService.getNewTour();
    }
    
    self.testTagline = function() {
        var region = '';
        
        if (!self.newTour.country||!self.newTour.city) return;
        
        if (self.newTour.city.region) {
            region = " (" + self.newTour.city.region + ")";
        }
            
        if (self.newTour.tagline) {
            return self.newTour.country.name + region + '! ' + 
                   self.newTour.city.name + '! ' + self.newTour.tagline + '!';
        } else {
            if (!self.newTour.currency) {
                self.newTour.currency = [];
            }
            return self.newTour.country.name + region + '! ' + 
                   self.newTour.city.name + '! ' + (self.newTour.price||'???') +
                   ' ' + self.newTour.currency.name + ' for ' + 
                   (self.newTour.duration||'???') + ' days!';
        }
    } 
    
    self.testDescription = function() {
        var region = '';
        
        if (!self.newTour.country||!self.newTour.city) return;
        
        if (self.newTour.city.region) {
            region = " (" + self.newTour.city.region + ")";
        }
        
        return self.newTour.country.name + region + '! ' + self.newTour.city.name + '! ' + (self.newTour.hotelName||'???') + " " + (self.newTour.hotelClass||'???') + ", " + (self.newTour.price||'???') + " " + (self.newTour.currency.name||'???') + " for " + (self.newTour.people||'???') + " persone(s)! Departure from " + (self.newTour.from||'???') + " " + (self.newTour.departure||'???') + " for "  + (self.newTour.duration||'???') +  " days!";
    } 
    
    self.initTour();
    self.handbooks = trAgTourService.getHandbooks;
    
    if ($scope.creationCtrl) {
        $scope.creationCtrl.newTour = self.newTour;
        $scope.$on('tourCreation', function () {
            self.validation = false;
            self.initTour();
        });
    }
    
    $scope.$watch('tourCtrl.newTour.country', function(newValue) {
        if (!newValue) { return; }
        trAgTourService.initCities(newValue.id);
        self.newTour.city = "";
    });
    
// visa info -start-
    self.visaText = {};
    self.visaError = {
        short:  false,
        middle: false,
        long:   false
    };
    self.visaChbx = {
        short:  false,
        middle: false,
        long:   false
    };

    function visaCheck(variant) {
        var regexp = {
                short:  /^\d{1,4}$/,
                middle: /^[а-яёА-ЯЁ\w\d\s\-\.$€₴,!]{2,100}$/,
                long:   /^[а-яёА-ЯЁ\w\d\s\-\.$€₴,!]{7,300}$/
            }

        if (self.visaText[variant]&&self.visaText[variant].search(regexp[variant]) !== -1) {
            self.visaError[variant] = false;
            return true;
        } else {
            self.visaError[variant] = true;
            return false;
        }
    }
    
    $scope.$watch('tourCtrl.visaChbx', function(newValue, oldValue) {
        var active, flag;
        
        if (newValue !== oldValue) {
            for (var prop in newValue) {
                if (newValue[prop] && newValue[prop] !== oldValue[prop]) {
                    visaCheck(prop) && (active = prop);
                    flag = true;
                }
            }
        
            if (flag) { 
                for (var prop in self.visaChbx) { self.visaChbx[prop] = false; }
                active && (self.visaChbx[active] = true);
            }
        }
        
    }, true);

    $scope.$watch('tourCtrl.visaText', function(newValue, oldValue) {
        if (newValue === oldValue) { return; }
        var active;
        
        for (var prop in newValue) {
            (newValue[prop] !== oldValue[prop]) && (active = prop);
        }
        
        if (visaCheck(active)) {
            !self.visaChbx[active] && (self.visaChbx[active] = true);
        } else {
            self.visaChbx[active] && (self.visaChbx[active] = false);
        }
    }, true);
// visa info -end-

// hotels list -start-
    self.foundHotels = [];
    $scope.$watch('tourCtrl.newTour.hotelName', function(newValue, oldValue) {
        if (newValue === oldValue) { return; }
        
        trAgTourService.hotelList(newValue)
        .then(function(answ) {
            self.foundHotels = answ.data;
        });
;
    }, true);

    self.setHotel = function(hotel) {
        self.newTour.hotelName = hotel.name;
        self.newTour.hotelClass = hotel.class;
        self.newTour.hotelId = hotel.id;
        if ($scope.creationCtrl.newHotel) {
            $scope.creationCtrl.newHotel.loadData(hotel.id);
        }
    }
    
    self.clearHotel = function() {
        self.newTour.hotelName = "";
        self.newTour.hotelClass = "";
        self.newTour.hotelId = "";
        if ($scope.hotelCtrl) {
            $scope.hotelCtrl.currentHotel = "";
        }
    }
// hotels list -end-

// validation -start-
    self.newTour.testValidity = function() {
        self.validation = true;
        
        if (self.newtour.$valid) {
            if (self.visaChbx.short) {
                self.newTour.visa = 'Extras visa. The cost of ' + self.visaText.short + ' ' + self.visaCurrency.id + ' upon arrival!';
            } else if (self.visaChbx.middle) {
                self.newTour.visa = 'Extras visa. The cost of ' + self.visaText.middle + '!';
            } else if (self.visaChbx.long) {
                self.newTour.visa = self.visaText.long + '!';
            }
    
            return true;
        } else {
            return false;
        }
    }
// validation -end-
}]);
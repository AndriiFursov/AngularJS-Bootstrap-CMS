/*
 * Tour service
 *
*/

angular.module('trAg.tour').service('trAgTourService', ['$http', function($http) {
    var self = this;
    
    var handbooks = {};
    
    
    function NewTour () {
        this.id               = getTourId(),
        this.show             = true,
//        this.country          = [],
//        this.city             = [],
//        this.departure        = '',
//        this.expireDate       = '',
        this.from             = 'Kiev',
//        this.vehicle          = [],
//        this.duration         = '',
//        this.price            = '',
//        this.currency         = [],
        this.people           = '1',
//        this.hotelName        = '',
//        this.hotelClass       = '',
//        this.hotelId          = '',
//        this.shortDescription = '',
//        this.room             = '',
//        this.accommodation    = '',
//        this.type             = [],
//        this.operator         = '',
//        this.tagline          = '',
//        this.extraInfo        = '',
        this.priceInclude     = 'The international transfer, transfer to hotel, accommodation at the hotel of specified class, medical insurance.'
    };
    
    
    function convertNumber(num) {
        return num = ("" + num).length > 1 ? num : "0" + num;
    }
    
    function getTourId() {
        var curentDate = new Date();

        return '' + curentDate.getFullYear() +
            convertNumber(curentDate.getMonth()+1) +
            convertNumber(curentDate.getDate()) +
            convertNumber(curentDate.getHours()) +
            convertNumber(curentDate.getMinutes());
    }
    
    self.getNewTour = function() {
        return new NewTour;
    }
    
    
    self.initHandbooks = function() {
        $http.get('http://travelingua.com.ua/php/tools.init-handlers.php')
        .then(function(answ) {
            handbooks.countries = answ.data.countries;
            handbooks.vehicles = answ.data.vehicles;
            handbooks.currencies = answ.data.currencies;
            handbooks.rooms = answ.data.rooms;
            handbooks.accommodation = answ.data.accomodation;
            handbooks.tourTypes = answ.data.tour_types;
            handbooks.tourOperators = answ.data.operators;
        });
    }
    
    self.getHandbooks = function () {
        return handbooks;
    };
    
    
    self.initCities = function (country) {
        if (country) {
            $http.get('http://travelingua.com.ua/php/tools.init-country.php', {params: {country: country}})
            .then(function(answ) {
                handbooks.cities = answ.data;
            });
        }
    };
    
    
    self.hotelList = function(searchData) {
        return $http.get('http://travelingua.com.ua/php/tools.hotels-search.php', {params: {hotel_name: searchData}});
    }
}]);
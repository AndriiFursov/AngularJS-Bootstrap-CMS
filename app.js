/*
 * Main app module
 *
*/

angular.module('travelAgency', ['ngAnimate', 'ui.bootstrap', 'trAg.tourCreation', 'trAg.tour', 'trAg.hotel'])
    .run(['trAgTourService', function(trAgTourService){
        trAgTourService.initHandbooks();
    }])
;
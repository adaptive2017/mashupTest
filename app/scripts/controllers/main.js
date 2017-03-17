'use strict';

/**
 * @ngdoc function
 * @name mashupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mashupApp
 */
angular.module('mashupApp')
  .controller('MainCtrl', function ($scope, openweathermapFactory) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var vm = this;
    vm.menuTemplate = {
    	url: 'views/about.html'
    };

    $scope.mostrarClima = function(){
      openweathermapFactory.getWeatherFromLocationByCoordinates({
          lat: $scope.lati,
          lon: $scope.longi,
          lang:'es', // (optional) http://openweathermap.org/current#multi
          units:'metric', // (optinal) http://openweathermap.org/current#data
          appid: 'fc3fd7c98f8b39b7dd94f3e2cc0fbf48'
      }).then(function(_data){
          $scope.resultadoDelClima = _data.data;
      }).catch(function (_data) {
          console.log(_data);
      }); 
    };


    var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(-33.019, -71.49),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    //var infoWindow = new google.maps.InfoWindow();

    // var marker =
    new google.maps.event.addListener($scope.map, 'click', function( event ){
      $scope.lati = event.latLng.lat();
      $scope.longi = event.latLng.lng();
      $scope.mostrarClima();
    });
    
    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    };

  });

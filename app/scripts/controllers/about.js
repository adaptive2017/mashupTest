'use strict';

/**
 * @ngdoc function
 * @name mashupApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mashupApp
 */
angular.module('mashupApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $( document ).ready(function(){
        $('.button-collapse').sideNav();
        $('.button-collapse').sideNav('hide');
    });
    $('.dropdown-button').dropdown({ hover: true, constrain_width: true, belowOrigin: true, alignment: 'right' });
  });

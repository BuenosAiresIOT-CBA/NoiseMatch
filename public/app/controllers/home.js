'use strict';

/* Controllers */
angular.module('ssApp.controllers')
  .controller('homeController', function($scope, $routeParams, $location, $route) {
    $scope.cities = [
        {'class': 'ny', 'name': 'Devs', 'endpoint' :'nyc'},
        {'class': 'au', 'name': 'Designers', 'endpoint' :'atx' },
        {'class': 'la', 'name': 'Negocio', 'endpoint' :'la'},
        {'class': 'ba', 'name': 'Monstruos', 'endpoint' :'ba'}
      ];
 });

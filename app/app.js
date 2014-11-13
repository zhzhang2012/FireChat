'use strict';

// Declare app level module which depends on views, and components
angular.module('FireChat', [
  'ngRoute',
  'FireChat.view1',
  'FireChat.view2',
  'FireChat.version',
  'FireChat.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

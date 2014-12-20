(function () {
  'use strict';

angular
  .module('LoremJS', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/datatypes', {
        templateUrl: 'views/datatypes.html',
        controller: 'DatatypesCtrl'
      })
      .when('/models', {
        templateUrl: 'views/models.html',
        controller: 'ModelsCtrl'
      })
      .when('/routes', {
        templateUrl: 'views/routes.html',
        controller: 'RoutesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

})();

(function () {
  'use strict';

  angular
    .module('LoremJS')
    .factory('modelsService', modelsService);

  modelsService.$inject = ['$http'];

  function modelsService($http) {

    return {
      getModels: getModels
    };

    function getModels() {
      return $http.get('/data/models.js')
        .then(function (response) {
          /*jslint evil: true */
          var models = eval(response.data);
          return models;
        }, function (reason) {
          console.error('Failed: ' + reason);
        });
    }
  }
})();





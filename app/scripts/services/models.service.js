(function () {
  'use strict';

  angular
    .module('LoremJS')
    .factory('modelsService', modelsService);

  modelsService.$inject = ['$q'];

  function modelsService($q) {

    return {
      getModels: getModels
    };
    function getModels() {

      var deferred = $q.defer();

      setTimeout(function () {
        deferred.resolve({data: ''});
      }, 1000);

      return deferred.promise;
    }
  }
})();





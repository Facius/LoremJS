(function () {
  'use strict';

  angular
    .module('LoremJS')
    .factory('datatypesService', datatypesService);

  datatypesService.$inject = ['$http'];

  function datatypesService($http) {

    return {
      getDatatypes: getDatatypes
    };

    function getDatatypes() {

      return $http.get('/data/datatypes.js')
        .then(function (response) {
          /*jslint evil: true */
          var datatypes = eval(response.data);
          return datatypes;
        }, function (reason) {
          console.error('Failed: ' + reason);
        });

      //  var deferred = $q.defer();
      //  setTimeout(function () {
      //    deferred.resolve({data: datatypes});
      //  }, 1000);
      //  return deferred.promise;

    }
  }
})();





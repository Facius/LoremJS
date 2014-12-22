(function () {
  'use strict';

  angular
    .module('LoremJS')
    .factory('datatypesService', datatypesService);

  datatypesService.$inject = ['$http'];

  function datatypesService($http) {

    return {
      getDatatypes: getDatatypes,
      getDatatype: getDatatype
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
    }

    function getDatatype(name) {

      return $http.get('/data/datatypes.js')
        .then(function (response) {
          /*jslint evil: true */
          var datatypes = eval(response.data);

          var filtered = datatypes.filter(function (el) {
            return el.name === name;
          });
          return filtered[0];
        }, function (reason) {
          console.error('Failed: ' + reason);
        });
    }
  }
})();





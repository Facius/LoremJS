(function () {
  'use strict';

  angular
    .module('LoremJS')
    .directive('faDatatypeAttributes', faDatatypeAttributes);

  faDatatypeAttributes.$inject = ['datatypesService'];

  function faDatatypeAttributes(datatypesService) {
    return {
      templateUrl: '/views/directives/datatype-attributes.html',
      restrict: 'A',
      scope: true,
      link: function (scope, element, attrs) {
        console.log(attrs.faDatatypeAttributes);

        var val = null;
        scope.$watch(attrs.faDatatypeAttributes, function (newVal) {
          if (newVal && newVal !== val) {
            val = newVal;
            setDatatype(newVal);
          }
        });

        function setDatatype(name) {
          scope.isLoading = true;
          var promise = datatypesService.getDatatype(name);
          promise.then(function (datatype) {
            scope.datatype = datatype;
            scope.isLoading = false;
          }, function (reason) {
            console.error('Failed: ' + reason);
            scope.isLoading = false;
          });
        }
      }

    };
  }
})();





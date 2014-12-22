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

        scope.$watch(attrs.faDatatypeAttributes, function (newVal, oldVal) {
          console.log(newVal, oldVal);
          if(newVal){
            setDatatype(newVal);
          }
        });


        function setDatatype(name) {
          scope.isLoading = true;
          var promise = datatypesService.getDatatype(name);
          promise.then(function (datatype) {
            console.log(datatype.func);

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





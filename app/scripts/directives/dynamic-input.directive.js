(function () {
  'use strict';
  angular
    .module('LoremJS')
    .directive('faDynamicInput', faDynamicInput);

  faDynamicInput.$inject = ['$http', '$compile'];

  function faDynamicInput($http, $compile) {
    return {
      restrict: 'A',
      scope: true,
      link: function (scope, element, attrs) {
        console.log(attrs.faDynamicInput);
        loadDatatype();
        function setTemplate(html) {
          element.html(html).show();
          $compile(element.contents())(scope);
        }

        function loadDatatype() {
          scope.isLoading = true;
          var promise = $http.get('/views/dynamic-input/test.html');
          promise.then(function (response) {
            setTemplate(response.data);
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





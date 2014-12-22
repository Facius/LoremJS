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
        switch (attrs.faDynamicInput) {
          case 'textstring':
            loadDatatype('/views/dynamic-input/textstring.html');
            break;
          case 'integer':
            loadDatatype('/views/dynamic-input/integer.html');
            break;
          case 'boolean':
            loadDatatype('/views/dynamic-input/boolean.html');
            break;
          case 'float':
            loadDatatype('/views/dynamic-input/float.html');
            break;
        }


        function setTemplate(html) {
          element.html(html).show();
          $compile(element.contents())(scope);
        }

        function loadDatatype(templateUrl) {
          scope.isLoading = true;
          var promise = $http.get(templateUrl);
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





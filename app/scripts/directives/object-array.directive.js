(function () {
  'use strict';

  angular
    .module('LoremJS')
    .directive('faObjectArray', faObjectArray);

  faObjectArray.$inject = ['$parse'];

  function faObjectArray($parse) {
    return {
      restrict: 'A',
      scope: true,
      link: function (scope, element, attrs) {

        var ngModelGetter = $parse(attrs.faObjectArray);
        var ngModelSetter = ngModelGetter.assign;

        // Check if the modal has an initail value
        if (typeof model === 'undefined' || model === null) {
          var model = [];
        }

        scope.remove = function (i) {
          var x = parseInt(i);
          model = ngModelGetter(scope);
          model.splice(x, 1);
          ngModelSetter(scope, model);
        };

        scope.add = function () {
          model = ngModelGetter(scope);
          console.log(model);
          model.push({});
          ngModelSetter(scope, model);
        };

      }
    };
  }
})();





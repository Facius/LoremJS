(function () {
  'use strict';

  angular
    .module('LoremJS')
    .controller('DatatypesCtrl', DatatypesCtrl);

  DatatypesCtrl.$inject = ['$scope', 'datatypesService'];
  function DatatypesCtrl($scope, datatypesService) {
    console.log('DatatypesCtrl');

    var promise = datatypesService.getDatatypes();
    $scope.isLoading = true;
    promise.then(function (datatypes) {
      $scope.datatypes = datatypes;
      $scope.isLoading = false;
    }, function (reason) {
      console.error('Failed: ' + reason);
      $scope.isLoading = false;
    });

    $scope.attrs = [];

  }

})();



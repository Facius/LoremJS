(function () {
  'use strict';

  angular
    .module('LoremJS')
    .controller('ModelsCtrl', ModelsCtrl);

  ModelsCtrl.$inject = ['$scope', 'datatypesService'];
  function ModelsCtrl($scope, datatypesService) {
    console.log('ModelsCtrl');

    var promise = datatypesService.getDatatypes();
    $scope.isLoading = true;
    promise.then(function (datatypes) {
      console.log(datatypes);
      $scope.datatypes = datatypes;
      $scope.isLoading = false;
    }, function (reason) {
      console.error('Failed: ' + reason);
      $scope.isLoading = false;
    });

    $scope.model = {
      name: 'test',
      properties: []
    };
  }

})();



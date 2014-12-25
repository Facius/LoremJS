(function () {
  'use strict';

  angular
    .module('LoremJS')
    .controller('ModelsCtrl', ModelsCtrl);

  ModelsCtrl.$inject = ['$scope', 'datatypesService', 'modelsService'];
  function ModelsCtrl($scope, datatypesService, modelsService) {
    console.log('ModelsCtrl');

    $scope.editModel = editModel;

    var promise = datatypesService.getDatatypes();
    $scope.isLoading = true;
    promise.then(function (datatypes) {
      //console.log(datatypes);
      $scope.datatypes = datatypes;
      $scope.isLoading = false;
    }, function (reason) {
      console.error('Failed: ' + reason);
      $scope.isLoading = false;
    });

    var modelPromise = modelsService.getModels();
    $scope.isLoading = true;
    modelPromise.then(function (models) {
      console.log(models);
      $scope.models = models;
      $scope.isLoading = false;
    }, function (reason) {
      console.error('Failed: ' + reason);
      $scope.isLoading = false;
    });

    function editModel(modelName){
      console.log('edit model:', modelName);
    }

  }

})();



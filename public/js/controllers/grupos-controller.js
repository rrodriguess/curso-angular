angular.module('alurapic').controller('GruposController', function($scope) {
    $scope.grupos = [];

    $http.get('v1/grupos')
    .success(function(grupos) {
        $scope.
    })

});
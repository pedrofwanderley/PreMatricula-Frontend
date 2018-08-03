var myApp = angular.module("myApp", []);

myApp.controller('accessController', ['$scope', '$http', function($scope, $http) {
    $scope.cadastrar = function(obj){
        var obj = {};
        obj.matricula = $scope.matricula;
        obj.email = $scope.email;
        obj.periodo = $scope.period;

        $http({
            url: 'https://prematricula2018.herokuapp.com/prematricula/alunos',
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            data: { "matricula": obj.matricula,
            "email": obj.email,
            "anoIngressado": obj.periodo,
            "disciplinasMatriculadas": []
                }
               
           
        })
        .then(function(response) {
                window.alert('Cadastro Realizado');
                window.location.assign('http://prematricula2018.surge.sh/login');
        }, 
        function(response) { 
                window.alert('Deu ruim');
        });
      
      }
   
   
}]);
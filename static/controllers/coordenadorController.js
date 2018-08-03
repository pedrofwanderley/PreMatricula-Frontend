var myApp = angular.module("myApp", []);

myApp.controller('cooController', ['$scope', '$http', function($scope, $http) {
    
        $scope.disciplinasSolicitadas = [];
        $scope.alunos = [];

      $scope.cadastrar = function(obj){
        var obj = {};
        obj.nome = $scope.nome;
        obj.creditos = $scope.creditos;
        obj.codigo = $scope.codigo;
        obj.carga = $scope.carga;

        $http({
            url: 'https://prematricula2018.herokuapp.com/prematricula/disciplinas',
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            data: [{ "codigo_disciplina": obj.codigo,
            "disciplina": obj.nome,
            "semestre": "",
            "pos_Requisitos": null,
            "creditos": obj.creditos,
            "tipo": "",
            "pre_Requisitos": null,
            "codigo_departamento": 14110000.0,
            "horas": obj.carga
                }]
               
           
        })
        .then(function(response) {
                window.alert('Disciplina Cadastrada');
        }, 
        function(response) { 
                window.alert('Deu ruim');
        });
      
      }

      $scope.getDisciplinasRequisitadas = function(){
        $http.get('https://prematricula2018.herokuapp.com/prematricula/api')
        .then(function(response){
         for (let index = 0; index < response.data.length; index++) {
               const element = response.data[index];
                  $scope.disciplinasSolicitadas[index] = element.cadeira + " " + element.vagasSolicitadas;
                        
                        
         };
                window.alert($scope.disciplinasSolicitadas);
        });
      }
   

    
     
        
}]);
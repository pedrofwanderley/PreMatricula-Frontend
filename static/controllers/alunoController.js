var myApp = angular.module("myApp", []);

myApp.controller('alunoController', ['$scope', '$http', function($scope, $http, Scope) {
  
    $scope.disciplinas = []; 
    $scope.sendPreMatricula = [];

    $scope.getRequest = function(){
        $http.get("https://prematricula2018.herokuapp.com/prematricula/disciplinas")
        .then(function(response){
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                    $scope.disciplinas[index] = element;
                
                
            };
            
        });
    }
    
    $scope.cadastrarDisc = function(array){
        var obj = {};
        obj.matricula = $scope.matricula;
        obj.lista = array;
    



        $http({
            url: 'https://prematricula2018.herokuapp.com/prematricula/alunos/' + obj.matricula,
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            data: {
                "disciplinas": obj.lista
            }
               
           
        })
        .then(function(response) {
                window.alert('Pre Matrícula Realizada');
        }, 
        function(response) { // optional
                window.alert('Deu ruim');
        });
              
}
    
   $scope.validate  = function (){
   var remember = document.getElementById('remember');
   if (remember.checked){
   alert("OK") ;
   }else{
   alert("Você tem que escolher pelo menos 1 disciplina")
   }
   }
   
   
        $scope.getValue = function () {
       var checks = document.getElementsByClassName("disc");
       var disciplinas = [];
       for(i=0; i < 5; i++){
           if (checks[i].checked === true) {
                disciplinas[i] = checks[i].value;
           }
       }
       alert(disciplinas);
       return (disciplinas);


    }  


  





   
    
   
}]);

app.directive('customDirective',[function(){
    return {
        restrict:'EA',
        scope:{
            name:'='
        },
        templateUrl:'./assets/html/customDirective.html',
        controller:function($scope){
            // $scope.name="Ahsan Ahmed"
        }
    }
}]);
angular.module("todoApp", [])
    .controller("MaintCtrl", function($scope) {
        $scope.todos = [];

        $scope.add = function() {
            $scope.todos.push($scope.newTodo);
            $scope.newTodo = {};
        }

        $scope.delete = function(todo) {
            var index = $scope.todos.indexOf(todo);
            $scope.todos.splice(index,1);
        }
    });
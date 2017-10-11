app.directive('myTodo', function(){
    return {
      	restrict: 'EA',
      	templateUrl: 'app/directives/todo.tpl.html',
      	scope: {
        	list: '=',
        	title: '@'
      	},
      	controller: function($scope){
      		$scope.add = function($ss){
      			$scope.list.push(
      				{name: $ss, completed: true}
      			);
      		}
      		console.log("nhi3");
      	}
    };
});


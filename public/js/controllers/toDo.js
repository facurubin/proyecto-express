app.controller('toDoCtrl',['$scope','factoryTareas',function($scope,tareas)
{
	//Inicio cantidad de tareas
	$scope.cantidad=0;
	$scope.tareas=[];
	
	tareas.getAll();

	$scope.eliminar= function(id)
	{
		for(f=0;f<$scope.tareas.length;f++)
		  {
		    if($scope.tareas[f].id == id)
		    {
		    	$scope.tareas.splice(f,(f+1));
		    	break;
		    }
		  }
	}
}
]);
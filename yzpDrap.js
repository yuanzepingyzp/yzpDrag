var yzpDrag=angular.module("app",[]);
yzpDrag.directive("yzpDrag",function(){
	return{
		restrict:'A',
		link:function($scope,$elm,$attrs){
			$elm.bind("mousedown",function(){
				$scope.onDrag=true;
			});
			$elm.bind("mousemove",function(){
				if($scope.onDrag){
					console.log("happen!");
					$scope.$apply(function(){ /*将指令的上下文指向scope*/
          $scope.$eval($attrs.yzpDrag);
					})
				}
			});
			$elm.bind("mouseup",function(){
				$scope.onDrag=false;
			})
		}
	}
})

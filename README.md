# yzpDrag
##EXAMPLE CODE
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	</head>
	<body ng-app="app">
		<button yzp-drag="dosome()">add</button>
		<script type="text/javascript" src="angular.js"></script>
		<script type="text/javascript" src="yzpDrag.js"></script>
	</body>
</html>
```
##property
```javascript
	$scope.yzpDrag.onDrag=true;ondrag 
	$scope.yzpDrag.mousedownstartX=event.clientX;
	$scope.yzpDrag.mousedownstartY=event.clientY;
	$scope.yzpDrag.elementstartX=$scope.x;
	$scope.yzpDrag.elementstartY=$scope.y;
```

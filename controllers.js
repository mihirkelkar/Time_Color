var timeAppCtrl = angular.module('timeAppCtrl', []);

timeAppCtrl.controller('timeCtrl', function($scope, $interval){
	$scope.callatinterval = function(){
		$scope.time = new Date();
		$scope.color = $scope.time.toString().slice(15, 24).split(":").join("");
		$scope.tds = $scope.time.toString().slice(15, 24);
		console.debug($scope.color);
	}
	$interval(function(){$scope.callatinterval();}, 1000);
});
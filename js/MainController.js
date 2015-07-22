angular.module('quoteBook').controller('MainController', function($scope,MainService) {

	$scope.getQuotes = function() {
		$scope.quotes = MainService.getData();
	}();

	$scope.buttonClick = function() {
		if ($scope.radio === "add") {
			$scope.quotes = MainService.addData($scope.textBox, $scope.authorBox);
		} else if ($scope.radio === "filter") {
			$scope.quoteFilter = $scope.textBox;
			$scope.showFilterButton = true;
		}
	};

	$scope.showFilterButton = false;

	$scope.removeFilter = function() {
		$scope.quoteFilter = "";
		$scope.showFilterButton = false;
	};

	$scope.resetQuotes = function() {
		$scope.quotes = MainService.resetStorage();
	};

	$scope.removeButton = function(toRemove) {
		$scope.quotes = MainService.removeData(toRemove);
	};
})
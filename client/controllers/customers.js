miniStoreApp.controller("customersController", function($scope, customersFactory) {
			
	customersFactory.getCustomers(function(data) {
		$scope.customers = data;
	})

	$scope.addCustomer = function() {

		customersFactory.addCustomer($scope.newCustomer, function() {

			console.log('$scope.newCustomer', $scope.newCustomer);
			customersFactory.getCustomers(function(data) {
				$scope.customers = data;

			})

			$scope.newCustomer = {};
		})

	}

	$scope.removeCustomer = function(id) {

		customersFactory.removeCustomer(id, function(data) {

		})

		customersFactory.getCustomers(function(data) {
				$scope.customers = data;
		})

	}

})
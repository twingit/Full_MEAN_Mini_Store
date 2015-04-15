miniStoreApp.controller("customersController", function($scope, customerFactory) {
			
	customerFactory.getCustomers(function(data) {
		$scope.customers = data;
	})

	$scope.addCustomer = function() {

		customerFactory.addCustomer($scope.newCustomer, function() {

			console.log('ggggggg', $scope.newCustomer);
			customerFactory.getCustomers(function(data) {
				$scope.customers = data;

			})

			$scope.newCustomer = {};
		})

	}

	$scope.removeCustomer = function(id) {

		customerFactory.removeCustomer(id, function(data) {

		})

		customerFactory.getCustomers(function(data) {
				$scope.customers = data;
		})

	}

})
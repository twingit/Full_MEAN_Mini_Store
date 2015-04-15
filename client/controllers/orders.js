miniStoreApp.controller("ordersController", function($scope, orderFactory, customerFactory) {
	
	customerFactory.getCustomers(function(data) {
		$scope.customers = data;
	})

	orderFactory.getOrders(function(data) {
		$scope.orders = data;
	})

	$scope.addOrder = function() {

		orderFactory.addOrder($scope.newOrder, function() {

			console.log('ggggggg', $scope.newOrder);
			orderFactory.getOrders(function(data) {
				$scope.orders = data;

			})

			$scope.newOrder = {};
		})

	}

	$scope.removeOrder = function(id) {

		orderFactory.removeOrder(id, function(data) {

		})

		orderFactory.getOrders(function(data) {
				$scope.orders = data;
		})

	}

})
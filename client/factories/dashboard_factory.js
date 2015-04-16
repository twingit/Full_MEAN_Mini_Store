miniStoreApp.factory("dashboardFactory", function($http) {

	var factory = {};

	factory.getCustomers = function(callback) {

		$http.get("/customers").success(function(output) {
			callback(customers);
		})

	}

	factory.getOrders = function(callback) {

		$http.get("/orders").success(function(output) {
			callback(orders);
		})

	}

	factory.getProducts = function(callback) {

		$http.get("/products").success(function(output) {
			callback(products);
		})

	}

	return factory;

})
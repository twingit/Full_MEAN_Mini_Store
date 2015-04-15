miniStoreApp.factory("orderFactory", function($http) {

	var factory = {};
	var orders = [];

	factory.getOrders = function(callback) {

		$http.get("/orders").success(function(output) {
			orders = output;
			callback(orders);
		})

	}

	factory.addOrder = function(info, callback) {				
		console.log('info', info);
		$http.post("/addOrder", info).success(function(output) {	
			callback(orders);
		})
	}

	factory.removeOrder = function(id, callback) {
		$http.post("/removeOrder", id).success(function() {
		})
	}

	return factory;

})
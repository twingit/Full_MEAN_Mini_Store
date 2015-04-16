miniStoreApp.factory("customersFactory", function($http) {

	var factory = {};
	var customers = [];

	factory.getCustomers = function(callback) {

		$http.get("/customers").success(function(output) {
			customers = output;
			callback(customers);
		})

	}

	factory.addCustomer = function(info, callback) {				
		console.log('info', info);
		$http.post("/addCustomer", info).success(function(output) {	
			callback(customers);
		})
	}

	factory.removeCustomer = function(id, callback) {
		$http.post("/removeCustomer", id).success(function() {
		})
	}

	return factory;

})
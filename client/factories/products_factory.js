miniStoreApp.factory("productsFactory", function($http) {

	var factory = {};
	var products = [];

	factory.getProducts = function(callback) {

		$http.get("/products").success(function(output) {
			products = output;
			callback(products);
		})

	}

	factory.addProduct = function(info, callback) {				
		// console.log('info', info);
		$http.post("/addProduct", info).success(function(output) {	
			callback();
		})
	}

	factory.removeProduct = function(id, callback) {
		$http.post("/removeProduct", id).success(function() {
		})
	}

	return factory;

})
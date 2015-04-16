miniStoreApp.controller("productsController", function($scope, productsFactory, ordersFactory) {
	
	productsFactory.getProducts(function(data) {
		$scope.products = data;
	})

	$scope.addProduct = function() {

		productsFactory.addProduct($scope.newProduct, function() {

			// Inside / Outside?
			productsFactory.getProducts(function(data) {
				$scope.products = data;
				console.log(data);
				$scope.newProduct = {};
			})

			
		})

	}

	$scope.removeProduct = function(id) {

		productsFactory.removeProduct(id, function(data) {

		})

		productsFactory.getProducts(function(data) {
				$scope.products = data;
		})

	}

})
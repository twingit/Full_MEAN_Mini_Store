// First add the following two lines at the top of the orders controller so that we can access our model through var Order
// Need to require mongoose to be able to run mongoose.model()
var mongoose = require("mongoose");
var Order = mongoose.model("Order");
var Product = mongoose.model('Product');

// This is our orders.js file located at /server/controllers/orders.js
// Note the immediate function and the object that is returned
module.exports = (function() {

	return {
		
		// Now that we have access to var Order lets use it to show orders:
		show: function(req, res) {
			
			Order.find({}, function(err, results) {
				if (err) {
					console.log(err);
				}
				else {
					res.json(results);
				}
			})

		},

		add: function(req, res) {

			// console.log("ldfldjf", req.body);

			var order = Order({name: req.body.name, product: req.body.product, quantity: req.body.quantity, date: req.body.date});

				// Validation code here...

				order.save(function(err, results) {
					if (err) {
						console.log(err);
					}
					else {
						Product.findOne({name: req.body.product}, function(err, results2){
							var quantity_left = results2.quantity - req.body.quantity;
							// console.log('quantity left', quantity);
							Product.update({name: req.body.product}, {quantity: quantity_left}, function(err, results3){
								if(err){
									console.log(err);
								}else{
									res.json(results3);
								}
							})
						})
						
					}
				})


		},

		remove: function(req, res) {
			
			Order.remove({_id: req.body._id}, function(err, results) {
				if (err) {
					console.log(err);
				}
				else {
					res.json(results);
				}
			})

		}

	}

})();
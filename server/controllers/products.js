var mongoose = require("mongoose");
var Product = mongoose.model("Product");

module.exports = (function() {

	return {
		
		// Now that we have access to var Product lets use it to show products:
		show: function(req, res) {
			
			Product.find({}, function(err, results) {
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
			var product = Product({name: req.body.name, image_url: req.body.image_url, description: req.body.description, quantity: req.body.quantity, date: req.body.date})
				product.save(function(err, results) {
					if (err) {
						console.log(err);
					}
					else {
						res.json(results);
					}
				})

		},

		remove: function(req, res) {
			
			Product.remove({_id: req.body._id}, function(err, results) {
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
// First add the following two lines at the top of the customers controller so that we can access our model through var Customer
// Need to require mongoose to be able to run mongoose.model()
var mongoose = require("mongoose");
var Customer = mongoose.model("Customer");

// This is our friends.js file located at /server/controllers/friends.js
// Note the immediate function and the object that is returned
module.exports = (function() {

	return {
		// show: function(req, res) {
		// 	res.json([{name: "Andrew", age: 24}, {name: "Michael", age: 34}]);
		// },

		// Now that we have access to var Friend lets use it to show friends:???
		show: function(req, res) {
			
			Customer.find({}, function(err, results) {
				if (err) {
					console.log(err);
				}
				else {
					res.json(results);
				}
			})

		},

		add: function(req, res) {
			console.log("ldfldjf", req.body);
			var customer = Customer({name: req.body.name, date: req.body.date})
				customer.save(function(err, results) {
					if (err) {
						console.log(err);
					}
					else {
						res.json(results);
					}
				})

		},

		remove: function(req, res) {
			
			Customer.remove({_id: req.body._id}, function(err, results) {
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
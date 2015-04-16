var customers = require("../server/controllers/customers.js");
var orders = require("../server/controllers/orders.js");
var products = require("../server/controllers/products.js");

module.exports = function(app) {

	app.get("/customers", function(req, res) {
		// console.log('here');
		// res.json([{name: "Andrew", age: 24}, {name: "Michael", age: 34}]); - from Server Tab; now we hook it up to friends.js in /server/controllers:
		customers.show(req, res);
		// So, we are delegating to the controller and passing along req and res.
	})

	app.post("/addCustomer", function(req, res) {

		console.log('in routes', req.body);
		customers.add(req, res);

	})

	app.post("/removeCustomer", function(req, res) {
		
		// console.log('in routes', req.body);
		customers.remove(req, res);

	})

	app.get("/orders", function(req, res) {
		// console.log('here');
		orders.show(req, res);
		// So, we are delegating to the controller and passing along req and res.
	})

	app.post("/addOrder", function(req, res) {

		console.log('in routes', req.body);
		orders.add(req, res);

	})
	app.post("/updateProduct", function(req, res) {

		console.log('in routes', req.body);
		products.update(req, res);

	})

	app.post("/removeOrder", function(req, res) {
		
		// console.log('in routes', req.body);
		orders.remove(req, res);

	})

	app.get("/products", function(req, res) {
		console.log('here');
		products.show(req, res);
		// So, we are delegating to the controller and passing along req and res.
	})

	app.post("/addProduct", function(req, res) {

		console.log('in routes', req.body);
		products.add(req, res);

	})

	app.post("/removeProduct", function(req, res) {
		
		// console.log('in routes', req.body);
		products.remove(req, res);

	})

}
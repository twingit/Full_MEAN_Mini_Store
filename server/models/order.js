var mongoose = require("mongoose");

// Create our orderSchema
var orderSchema = new mongoose.Schema({
	name: String,
	product: String,
	quantity: Number,
	date: {type: Date, default: Date.now}
});

// Use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural):
mongoose.model("Order", orderSchema);
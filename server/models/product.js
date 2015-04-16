var mongoose = require("mongoose");

// Create our productSchema
var productSchema = new mongoose.Schema({
	name: String,
	image_url: String,
	description: String,
	quantity: Number,
	// quantity_left: Number,
	date: {type: Date, default: Date.now()}
});

// Use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural):
mongoose.model("Product", productSchema);
var mongoose = require("mongoose");

// Create out customerSchema
var customerSchema = new mongoose.Schema({
	name: String,
	date: {type: Date, default: Date.now}
});

// Use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural):
mongoose.model("Customer", customerSchema);
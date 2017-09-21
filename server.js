const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB

var MONGODB_URI = "mongodb://heroku_3tzn4swn:c2gves7lh73q8j52jq8o9glth9@ds141534.mlab.com:41534/heroku_3tzn4swn";
mongoose.connect(MONGODB_URI);

// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist", {
//         useMongoClient: true
//     }
// );

// Listen on port 3000
app.listen(process.env.PORT || 3000, function() {
    console.log("App running on port 3000!");
});
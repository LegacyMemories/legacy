const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys")

require("./models/User")
require("./services/passport");



mongoose.connect(keys.mongoURI);
const PORT = process.env.PORT || 3001;

require("dotenv").config();

require("./routes/authRoutes")(app);
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

// Add routes here

//Get request for the landing page
app.get("/", (req, res) => {
  res.json(JSON.parse(response.body));
});

//if running on a deployed site use the build folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});

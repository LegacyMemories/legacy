const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./models");
const mongoose = require("mongoose");

const routes = require("./routes");
const app = express();
//require('dotenv').config();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Serve up static assets
if ( process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
else app.use(express.static('client/public'));

app.use(session ({
  secret: 'dementia',
  resave: false,
}))

// Add routes here

//Get request for the landing page
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/legacy',
  {
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});
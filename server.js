const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const cookieSession = require("cookie-session");
const passport = require("passport");
const dbConnection = require("./models");
const mongoose = require("mongoose");
const app = express();
const keys = require("./config/keys");

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

const routes = require("./routes");
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else app.use(express.static("client/public"));

require("./models/user");
require("./services/passport");

app.use(authRoutes, routes);

//require('dotenv').config();

// app.use(
//   session({
//     secret: "dementia",
//     resave: false,
//   })
// );

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/legacy",
  {}
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});

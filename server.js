// Require our dependecies
var express = require("express");
var mongoose = require("mongoose");
var bluebird = require("bluebird");
var bodyParser = require("body-parser");

// Set up a default port, configure mongoose, configure our middleware
var PORT = process.env.PORT || 8888;
mongoose.Promise = bluebird;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

var db = process.env.MONGODB_URI || "mongodb://localhost/myReactApp";

// Connect mongoose to our database
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

//import mongoose

var Articles = require("./models/models.js");

app.get("/api/saved", function(req, res) {
    Articles.find({}, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

app.post("/api/saved", function(req, res) {
  console.log(req.body);
    Articles.create(req.body, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

app.delete("/api/saved/:_id", function(req, res) {
    Articles.findByIdAndRemove(req.params._id, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

// Start the server
app.listen(PORT, function() {
  console.log("Now listening on port %s! Visit localhost:%s in your browser.", PORT, PORT);
});
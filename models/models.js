var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  text: String,
});

var Articles = mongoose.model("Article", articleSchema);

module.exports = Articles;
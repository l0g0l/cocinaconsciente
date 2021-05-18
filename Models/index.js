const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.user = require("./user.model");
db.ingredients = require("./ingredients.model");
db.receipes = require("./receipes.model");

module.exports = db;
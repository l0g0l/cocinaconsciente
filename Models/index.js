//Definimos el modelo de Mongoose
const dbConfig = require("../Config/db.config");

//TODO: Conexión a atlas
//* Para guardar le uri que te da mongo hay que encodificarla 
decodeURI(process.env.DB_URI)
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.user = require("./user.model");
db.ingredients = require("./ingredients.model");
db.recipes = require("./recipes.model");
db.shopLists = require("./shopLists.model");

module.exports = db;
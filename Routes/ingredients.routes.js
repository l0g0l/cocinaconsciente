
const { authJwt } = require("../Middlewares");
const controller = require("../Controllers/ingredients.controller");

module.exports = function(app) {
 
  app.get("/api/ingredients", controller.getAllIngredients);

};

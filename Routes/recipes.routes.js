
const { authJwt } = require("../Middlewares");
const controller = require("../Controllers/recipes.controller");

module.exports = function(app) {
 
  app.get("/api/recipes", controller.getRecipesFilter);

};

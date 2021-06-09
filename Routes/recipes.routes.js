
const { authJwt } = require("../Middlewares");
const controller = require("../Controllers/recipes.controller");

module.exports = function(app) {
 
  app.get("/api/recipes", authJwt.verifyToken, controller.getRecipesFilter);
  app.get("/api/recipes/:recipeid", authJwt.verifyToken, controller.getRecipeById);
  app.get("/api/recipes/popular/:n_recipes", authJwt.verifyToken, controller.getPopularRecipes);

};

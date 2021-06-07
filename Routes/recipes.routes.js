
const { authJwt } = require("../Middlewares");
const controller = require("../Controllers/recipes.controller");

module.exports = function(app) {
 
  app.get("/api/recipes", controller.getRecipesFilter);
  app.get("/api/recipes/:recipeid", controller.getRecipeById);
  app.get("/api/recipes/popular/:n_recipes", controller.getPopularRecipes);

};


const {authJwt} = require("../Middlewares");
const controller = require("../Controllers/ingredients.controller");

module.exports = function(app) {
 console.log(authJwt)
  app.get("/api/ingredients", authJwt.verifyToken, controller.getAllIngredients);

};

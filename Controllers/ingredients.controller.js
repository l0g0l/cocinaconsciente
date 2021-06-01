/* We don’t need to write CRUD functions, Mongoose Model supports all of them:
create a new Ingredient: object.save()
find a Ingredient by id: findById(id)
retrieve all Ingredients: find()
update a Ingredient by id: findByIdAndUpdate(id, data)
remove a Ingredient: findByIdAndRemove(id)
remove all Ingredients: deleteMany()*/

const db = require("../Models");
const Recipes = db.recipes;
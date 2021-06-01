/* We don’t need to write CRUD functions, Mongoose Model supports all of them:
create a new shoplist: object.save()
find a shoplist by id: findById(id)
retrieve all shoplists: find()
update a shoplist by id: findByIdAndUpdate(id, data)
remove a shoplist: findByIdAndRemove(id)
remove all shoplists: deleteMany()
find all shoplists by ingredients: find({ title: { $regex: new RegExp(title), $options: “i” } }) */


const db = require("../Models");
const Recipes = db.recipes;
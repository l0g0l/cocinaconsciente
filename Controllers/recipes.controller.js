/* We don’t need to write CRUD functions, Mongoose Model supports all of them:
find a Receipe by id: findById(id)
retrieve all Recipes: find()
update a Receipe by id: findByIdAndUpdate(id, data)
remove a Receipe: findByIdAndRemove(id)
remove all Recipes: deleteMany()
find all Recipes by ingredients: find({ title: { $regex: new RegExp(title), $options: “i” } }) */

const dbConfig = require("../Config/db.config");
const db = require('./Models');
const fs = require("fs");
const mongoose = require("mongoose");

const user = JSON.parse(fs.readFileSync(`${__dirname}/dataRecipes.json`,"utf-8"))

const importData = async ()=> {
try {
    await User.create(users);
    console.log("DAta imported")
    process.exit()
}catch(err){
console.log(err)
}
}


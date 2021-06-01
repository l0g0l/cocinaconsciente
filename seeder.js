/* We don’t need to write CRUD functions, Mongoose Model supports all of them:
find a Receipe by id: findById(id)
retrieve all Recipes: find()
update a Receipe by id: findByIdAndUpdate(id, data)
remove a Receipe: findByIdAndRemove(id)
remove all Recipes: deleteMany()
find all Recipes by ingredients: find({ title: { $regex: new RegExp(title), $options: “i” } }) */

const fs = require("fs");
const mongoose = require("mongoose");

// Load env vars
const db =require("./Config/db.config");

// Load models
const Recipes = require("./Models/recipes.model");

// Connect to DB
const url = `mongodb://${db.HOST}:${db.PORT}/${db.DB}`
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Read JSON files
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/dataRecipes.json`, "utf-8")
);

// Import into DB
const importData = async () => {
  try {
    await Recipes.create(users);
    console.log("Data Imported...");
    process.exit();
  } catch (err) {
    console.error(err);
  }
  if (process.argv[2] === "-i") {
      console.log(process.argv)
    importData();
  } else {console.log("no se ha importado una mierda")
  }
};
/* 
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

 */
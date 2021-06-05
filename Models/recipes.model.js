// Creación Schema 
const mongoose = require("mongoose");


  const Recipes = mongoose.model(
    "Recipes",
    new mongoose.Schema(
      {
        nameReceipe: String,
        typeDiet: String,
        portions: Number,
        prepTime: String,
        ingredients: Array,
        difficulty: String,
        elaboration: String,
        image: String ,
        rating: Number,
      },
      { timestamps: true }
    )
  );

  module.exports =  Recipes;

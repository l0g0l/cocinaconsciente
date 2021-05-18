// Creación Schema 
const mongoose = require("mongoose");


  const Receipes = mongoose.model(
    "Receipes",
    new mongoose.Schema(
      {
        nameReceipe: String,
        typeCuisine: String,
        typeDiet: String,
        portions: Number,
        prepTime: String,
        ingredients: Array,
        elaboration: String,
        image: [{ url: String }]
      },
      { timestamps: true }
    )
  );

  module.exports =  Receipes;

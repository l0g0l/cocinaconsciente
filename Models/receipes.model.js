// Creación Schema 
const mongoose = require("mongoose");


  const Receipes = mongoose.model(
    "Receipes",
    new mongoose.Schema(
      {
        nameReceipe: String,
        typeDiet: String,
        portions: Number,
        prepTime: String,
        ingredients: Array,
        difficulty: String,
        elaboration: String,
        image: [{ url: String }],
        rating: Number,
      },
      { timestamps: true }
    )
  );

  module.exports =  Receipes;

// Creación Schema 
const mongoose = require("mongoose");


    const Ingredients = mongoose.model(
      "Ingredients",
      new mongoose.Schema(
        {
          name: String,
          image: String,
          
        },
        { timestamps: true }
      )
    );
  
    module.exports =  Ingredients;

// Creación Schema 
const mongoose = require("mongoose");


    const Ingredients = mongoose.model(
      "Ingredients",
      new mongoose.Schema(
        {
          name: String,
          
        },
        { timestamps: true }
      )
    );
  
    module.exports =  Ingredients;

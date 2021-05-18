// Creación Schema 
const mongoose = require("mongoose");

module.exports = mongoose => {
    const ingredients = mongoose.model(
      "Ingredients",
      mongoose.Schema(
        {
          name: String,
          
        },
        { timestamps: true }
      )
    );
  
    return ingredients;
  };
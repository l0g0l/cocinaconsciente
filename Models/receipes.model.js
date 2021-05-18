// Creación Schema 
const mongoose = require("mongoose");

module.exports = mongoose => {
  const receipes = mongoose.model(
    "Receipes",
    mongoose.Schema(
      {
        name: String,
        
      },
      { timestamps: true }
    )
  );

  return receipes;
};
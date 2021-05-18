// Creación Schema 
const mongoose = require("mongoose");


    const ShopLists = mongoose.model(
      "ShopLists",
      new mongoose.Schema(
        {
          shopLists: Array
        },
        { timestamps: true }
      )
    );
  
    module.exports = ShopLists;
  

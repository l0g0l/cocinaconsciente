// Creación Schema 
const mongoose = require("mongoose");


    const User = mongoose.model(
      "User",
      new mongoose.Schema(
        {
          avatar: [{ url: String }],
          name: String,
          lastname: String,
          email: String,
          password: String,
          favoritesReceipes: Array
        },
        { timestamps: true }
      )
    );
  
    module.exports = User;
  
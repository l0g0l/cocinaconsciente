require('dotenv').config();
const jwt = require('jsonwebtoken');
const Ingredients = require('../Models/ingredients.model');


 

exports.getAllIngredients = async (req, res) => {

    await Ingredients.find({}, '-password').exec((err, ingredients) => {
        if (err) {
            return res.status(400).json({
                error: 'Algo no va bien...',
            });
        }

        if (ingredients.length == 0) {
            res.json({ message: 'Ningún ingrediente encontrado' })
        } else {
            res.json(ingredients);
        }
    });

  };


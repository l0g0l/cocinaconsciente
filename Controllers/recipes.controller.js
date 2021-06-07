require('dotenv').config();
const jwt = require('jsonwebtoken');
const Recipes = require('../Models/recipes.model');


 

exports.getRecipesFilter = async (req, res) => {

    // req.query, método de express para buscar por los parametros que le metas en la uri, es distinto a req.params que busca por el id en la uri y le tienes que añadir /:id (o lo que sea)
    console.log(req.query)

    // ingredientes lo transformamos a array separado por comas ya uqe el método $all requiere como parámetro un array
    ingredients = req.query.ingredients.split(',')
    console.log(ingredients)
 
    typediet = req.query.typeDiet
    console.log(typediet)
    // si no le ponemos yn typediet en la uri, nos devuelve undefined, para que eso no ocurra, con el ternario le decimos que, si es undefined, nos devuelva cualquier typediet y sino, nos devuelva el que le hemos indicado en el buscador. Con typeof checkeamos si typediet está definido o no, si es undefined no está definido.
    await Recipes.find({ingredientsquery: { $all: ingredients}, typeDiet: typeof typediet === "undefined" ? /.*/ : typediet}).exec((err, ingredients) => { 
        if (err) {
            return res.status(400).json({
                error: 'Algo no va bien...',
            });
        }

        if (ingredients.length == 0) {
            res.json({ message: 'Ninguna receta encontrada' })
        } else {
            res.json(ingredients);
        }
    });

  };

  exports.getRecipeById = async (req, res) => {

    recipeid = req.params.recipeid
    console.log(recipeid)
    // si no le ponemos yn typediet en la uri, nos devuelve undefined, para que eso no ocurra, con el ternario le decimos que, si es undefined, nos devuelva cualquier typediet y sino, nos devuelva el que le hemos indicado en el buscador. Con typeof checkeamos si typediet está definido o no, si es undefined no está definido.
    await Recipes.findById(recipeid).exec((err, recipes) => { 
        if (err) {
            return res.status(400).json({
                error: 'Algo no va bien...',
            });
        }

        if (recipes.length == 0) {
            res.json({ message: 'Ninguna receta encontrada' })
        } else {
            res.json(recipes);
        }
    });

  };



  exports.getPopularRecipes = async (req, res) => {

    n_recipes = parseInt(req.params.n_recipes)
    console.log(n_recipes)

    await Recipes.find().limit((n_recipes ? n_recipes : 4)).exec((err, recipes) => { 
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }

        if (recipes.length == 0) {
            res.json({ message: 'Ninguna receta encontrada' })
        } else {
            res.json(recipes);
        }
    });

  };

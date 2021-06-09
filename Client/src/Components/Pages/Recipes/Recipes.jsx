import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import lupa from '../../../Images/lupa.svg';
import flechaizq from '../../../Images/flechaizq.svg';
import filtros from '../../../Images/filtros.svg';
import Card from '../../-Reusable/Card/Card'



import './recipes.scss'


const Recipes = (props) => {
    const query_params = new URLSearchParams(props.location.search)
    const ingredients = query_params.get('ingredients')
    const typeDiet = query_params.get('typeDiet')
    console.log(typeDiet)
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        let url = `http://localhost:5000/api/recipes?ingredients=${ingredients}&typeDiet=${typeDiet}`
        axios.get(url).then(response => {
            console.log(response.data)
            setRecipes(response.data)
        })
    }, [ingredients, typeDiet]);


    return (
        <div className="receipes-container">


            <div className="searchinput-container">
            <Link to='./buscador'>    <div className="inputsearch">
                    <div className="inputsearch-img">
                        <button>
                           <img className="inputsearch-img-imagen1" src={flechaizq} alt="icono de flecha izq" />
                        </button>
                    </div>
                    <div className="input-lupa">
                        <div className="inputsearch-input">
                            <input className="inputsearch-input-inpt" type="text" name="search" placeholder="Escribe tus ingredientes" />
                        </div>
                        <div className="inputsearch-img">
                            <button className="inputsearch-btn">
                               <img className="inputsearch-img-imagen2" src={lupa} alt="icono de lupa" />
                            </button>

                        </div>

                    </div>
                    <div className="inputsearch-img">
                        <button className="inputsearch-filter">
                            <img className="inputsearch-filter-img" src={filtros} alt="icono de filtros" />
                        </button>
                    </div>
                </div></Link>
                {recipes.map((value) => {
                    // hacemos este map para que nos devuelva cada uno de los ingredientes que hemos seleccionado
                    return (
                        <div className="tarjetareceta">
                            <Card nameRecipe={value.nameRecipe} image={value.image} id={value._id} />
                        </div>
                    )

                })}

            </div>
        </div>
    )
}

export default Recipes

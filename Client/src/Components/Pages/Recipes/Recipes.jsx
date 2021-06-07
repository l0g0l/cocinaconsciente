import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import lupa from '../../../Images/lupa.svg';
import flechaizq from '../../../Images/flechaizq.svg';
import filtros from '../../../Images/filtros.svg';
import Card from '../../-Reusable/Card/Card'
import IconRound from '../../-Reusable/IconRound/IconRound'



import './recipes.scss'


const Recipes = (props) => {
    const query_params = new URLSearchParams(props.location.search)
    const ingredients = query_params.get('ingredients')
    const typeDiet = query_params.get('typeDiet')
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        let url= `http://localhost:5000/api/recipes?ingredients=${ingredients}`
        axios.get(url).then(response => {
            console.log(response.data)
            setRecipes(response.data)
        })
    }, []);

    let history = useHistory();
    const sendSearch = () => {
        history.push("/buscador");
    }
    return (
        <div>
            {recipes.map((value) => {
                // hacemos este map para que nos devuelva cada uno de los ingredientes que hemos seleccionado
                return (
                    <div>
                        <Card nameRecipe={value.nameRecipe} image={value.image} id={value._id}/>
                    </div>
                )

            })}
                
        </div>
    )
}

export default Recipes

import React from 'react'
import { Link } from 'react-router-dom';


import  './txt-btn.scss'

const TxtBtn = (props) => {
console.log(props)


    return (
        <div>

            <div className="messgreceipes">
                <h3 className="messgreceipes-h3">¡Se han encontrado {props.infoFetchRecipe.recipes.length} recetas!</h3>
                <p className="messgreceipes-p">Para afinar más tu búsqueda te recomendamos añadir más ingredientes</p>
            </div>

            <div className="btn-recipes">
                <Link to={`./resultadosrecetas?ingredients=${props.infoFetchRecipe.stringingredient}`}><button className="btn-recipes-btn">Ver Recetas</button></Link>
            </div>
            
        </div>
    )
}

export default TxtBtn

import React from 'react'
import BtnGreen from '../../-Reusable/Btn-Green/BtnGreen'

import  './txt-btn.scss'

const TxtBtn = (props) => {
console.log(props)


    return (
        <div>

            <div className="messgreceipes">
                <h3 className="messgreceipes-h3">¡Se han encontrado recetas!</h3>
                <p className="messgreceipes-p">Para afinar más tu búsqueda te recomendamos añadir más ingredientes</p>
            </div>

            <div className="btn-recipes">
                <button >Ver Recetas</button>
            </div>
            
        </div>
    )
}

export default TxtBtn

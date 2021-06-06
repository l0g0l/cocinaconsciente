import React from 'react'
import BtnGreen from '../../-Reusable/Btn-Green/BtnGreen'

const TxtBtn = (props) => {

    return (
        <div>

            <div className="messgreceipes">
                <h3 className="messgreceipes-txt">¡Se han encontrado 18 recetas!</h3>
                <p>Para afinar más tu búsqueda te recomendamos añadir más ingredientes</p>
            </div>

            <div>
                <BtnGreen texto={'Ver recetas'}/>
            </div>
            
        </div>
    )
}

export default TxtBtn

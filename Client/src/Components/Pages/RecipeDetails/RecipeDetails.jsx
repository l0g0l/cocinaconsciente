import React from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import lupa from '../../../Images/lupa.svg';
import flechaizq from '../../../Images/flechaizq.svg';
import filtros from '../../../Images/filtros.svg';
import Card from '../../-Reusable/Card/Card'
import IconRound from '../../-Reusable/IconRound/IconRound'
import menos from '../../../Images/menos.svg';
import mas from '../../../Images/mas.svg';


import './recipedetails.scss'
import StarRating from '../../-Reusable/StarRating/StarRating';


const RecipeDetails = (props) => {

    return (
        <div>
            <div className="inputsearch">
                <div className="inputsearch-img">
                    <button>
                        <Link to='./buscador'>  <img className="inputsearch-img-imagen1" src={flechaizq} alt="icono de flecha izq" /></Link>
                    </button>
                </div>
                <div className="input-lupa">
                    <div className="inputsearch-input">
                        <Link to='./buscador'><input className="inputsearch-input-inpt" type="text" name="search" placeholder="Escribe tus ingredientes" /></Link>
                    </div>
                    <div className="inputsearch-img">
                        <button className="inputsearch-btn">
                            <Link to='./buscador'><img className="inputsearch-img-imagen2" src={lupa} alt="icono de lupa" /></Link>
                        </button>

                    </div>

                </div>
                <div className="inputsearch-img">
                    <button className="inputsearch-filter">
                        <Link to='./buscador'><img className="inputsearch-filter-img" src={filtros} alt="icono de filtros" /></Link>
                    </button>
                </div>
            </div>

            <div className="card">
                <Card />
            </div>

            <div className="txt">
                <p className="txthome">Porciones</p>
                </div>
                <div className="numberportions">
                <div className="txt">
                    <img className="txthome" src={menos} />
                </div>
                <div className="txt">
                    <p className="txthome">{props.portions}</p>
                </div>
                <div className="txt">
                    <img className="txthome" src={mas} />
                </div>
            </div>
            <div className="txt">
            <p className="txthome">ingredientes</p>
            </div>
            <div className="txt">
            {props.ingredientsrecipe}
            </div>
            <div className="txt">
            {props.elaboration}
            </div>
            <div className="txt">
                <p>Valora una receta</p>
                <StarRating/>
            </div>
            <div className="recomendations">
                <div className="img">
                <img src="" alt="" />
                <pre>
                    ¿Sabías que en los hogares españoles se tira aproximadamente 1.339 millones de Kilos/litros de comida y bebida al año y cerca de 820 millones de personas a nivel global padecen hambre? ¿Cómo podríamos, desde nuestros hogares, evitar el desperdicio y ayudar a la humanidad y al planeta?: 
                    Planifica un menú semanal, compra sólo lo necesario, almacena los alimentos correctamente, ten en cuenta la diferencia entre fechas de consumo preferente y caducidad, congela correctamente los alimentos, coloca los alimentos más viejos delante de los nuevos, aprovecha los alimentos para otra comida. 
                    Busca más recetas y encuentra consejos para aprovechar tus alimentos.</pre>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails

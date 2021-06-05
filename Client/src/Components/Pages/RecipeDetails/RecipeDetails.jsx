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


const RecipeDetails = () => {

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
                    <p className="txthome">4</p>
                </div>
                <div className="txt">
                    <img className="txthome" src={mas} />
                </div>
            </div>
            <div className="txt">
            <p className="txthome">ingredientes</p>
            </div>
        </div>
    )
}

export default RecipeDetails

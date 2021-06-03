import React from 'react';
import { Link } from 'react-router-dom';

import lupa from '../../../Images/lupa.svg';
import flechaizq from '../../../Images/flechaizq.svg'


import './searchinput.scss'

const SearchInput = () => {

    
    return (
        <div className="searchinput-container">
            <div className="inputsearch">
                <div className="inputsearch-img">
                    <button>
                      <Link to='./'>  <img className="inputsearch-img-imagen1" src={flechaizq} alt="icono de flecha izq" /></Link>
                    </button>
                </div>
                <div className="input-lupa">
                    <div className="inputsearch-input">
                        <input className="inputsearch-input-inpt" type="search" name="search" placeholder="Escribe aquí tus ingredientes" />
                    </div>
                    <div className="inputsearch-img">
                        <button className="inputsearch-btn">
                            <img className="inputsearch-img-imagen2" src={lupa} alt="icono de lupa" />
                        </button>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default SearchInput

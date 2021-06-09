import React from 'react'
import { Link } from 'react-router-dom';
import shoplist from '../../../Images/shoplist.svg'
import lupa from '../../../Images/lupa.svg';
import flechaizq from '../../../Images/flechaizq.svg';
import filtros from '../../../Images/filtros.svg';

import './shoplists.scss'


const ShopLists = () => {
    return (
        <div>
      <Link to='./home'>    <div className="inputsearch1">
                    <div className="inputsearch1-img">
                        <button>
                            <img className="inputsearch1-img-imagen1" src={flechaizq} alt="icono de flecha izq" />
                        </button>
                    </div>
                    <div className="input-lupa">
                        <div className="inputsearch1-input">
                            <input className="inputsearch1-input-inpt" type="text" name="search" placeholder="Escribe tus ingredientes" />
                        </div>
                        <div className="inputsearch1-img">
                            <button className="inputsearch1-btn">
                                <img className="inputsearch1-img-imagen2" src={lupa} alt="icono de lupa" />
                            </button>

                        </div>

                    </div>
                    <div className="inputsearch1-img">
                        <button className="inputsearch1-filter">
                            <img className="inputsearch1-filter-img" src={filtros} alt="icono de filtros" />
                        </button>
                    </div>
                </div></Link>
        
            <img className="shoplist" src={shoplist} alt="" />
        </div>
    )
}

export default ShopLists

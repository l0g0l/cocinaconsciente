import React from 'react'
import lupa from '../../../Images/lupa.svg';
import flechaizq from '../../../Images/flechaizq.svg'
import ensaladera from '../../../Images/ensaladera.svg'
import beans from "../../../Images/iconosAlimentos/beans.svg";
import bacon from "../../../Images/iconosAlimentos/bacon.svg";
import fish from "../../../Images/iconosAlimentos/fish.svg";
import watermelon from "../../../Images/iconosAlimentos/watermelon.svg";




import './searchinput.scss'

const SearchInput = () => {
    return (
        <div className="searchinput-container">
            <div className="inputsearch">
                <div className="inputsearch-img">
                    <button>
                        <img className="inputsearch-img-imagen1" src={flechaizq} alt="icono de flecha izq" />
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
            <div className="inputsearch-txt">
                <p className="inputsearch-txt-texto">¡Añade los ingredientes de los que dispones y encuentra las mejores recetas!</p>
            </div>
            <div className="inputsearch-ensaladera">
                <img className="inputsearch-ensaladera-img" src={ensaladera} alt="icono ensaladera" />
            </div>
            <div className="yellowcontainer2">
                <div className="yellowcontainer2-txt">
                    <p className="yellowcontainer2-txt-texto">
                        Los ingredientes más populares</p>
                </div>
            </div>
            <div className="yellowcontainer2-icons">
                <div className="yellowcontainer2-icons-bckg">
                    <img
                        className="yellowcontainer2-icons-img"
                        src={beans}
                        alt="manzana"
                    />
                </div>
                <div className="yellowcontainer2-icons-bckg">
                    <img
                        className="yellowcontainer2-icons-img"
                        src={fish}
                        alt="pescado"
                    />
                </div>
                <div className="yellowcontainer2-icons-bckg">
                    <img
                        className="yellowcontainer2-icons-img"
                        src={bacon}
                        alt="beicon"
                    />
                </div>
                <div className="yellowcontainer2-icons-bckg">
                    <img
                        className="yellowcontainer2-icons-img"
                        src={watermelon}
                        alt="pescado"
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchInput

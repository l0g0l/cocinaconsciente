import React from 'react'
import SearchInput from '../../-Reusable/SearchInput/SearchInput'
import ensaladera from '../../../Images/ensaladera.svg'
import beans from "../../../Images/iconosAlimentos/beans.svg";
import bacon from "../../../Images/iconosAlimentos/bacon.svg";
import fish from "../../../Images/iconosAlimentos/fish.svg";
import watermelon from "../../../Images/iconosAlimentos/watermelon.svg";

import './search.scss'

const Search = () => {
    return (
        <div className="search-container">
            <SearchInput />
            <div className="inputsearch-txt">
                <p className="inputsearch-txt-texto">¡Añade los ingredientes de los que dispones y encuentra las mejores recetas!</p>
            </div>
            <div className="inputsearch-ensaladera">
                <img className="inputsearch-ensaladera-img" src={ensaladera} alt="icono ensaladera" />
            </div>
            <div className="yellowcontainer">
                <div className="yellowcontainer-txt">
                    <p className="yellowcontainer-txt-texto">
                        Los ingredientes más populares de la semana
                    </p>
                </div>
                <div className="yellowcontainer-icons">
                    <div className="yellowcontainer-icons-bckg">
                        <img
                            className="yellowcontainer-icons-img"
                            src={beans}
                            alt="Judías"
                        />
                        <p>Judías</p>
                    </div>
                    <div className="yellowcontainer-icons-bckg">
                        <img
                            className="yellowcontainer-icons-img"
                            src={fish}
                            alt="pescado"
                        />
                        <p>Pescado</p>
                    </div>
                    <div className="yellowcontainer-icons-bckg">
                        <img
                            className="yellowcontainer-icons-img"
                            src={bacon}
                            alt="beicon"
                        />
                        <p>Beicon</p>
                    </div>
                    <div className="yellowcontainer-icons-bckg">
                        <img
                            className="yellowcontainer-icons-img"
                            src={watermelon}
                            alt="Sandía"
                        />
                        <p>Sandía</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Search

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import lupa from '../../../Images/lupa.svg';
import flechaizq from '../../../Images/flechaizq.svg';
import Filter from '../../-All/Filter/Filter'
import filtros from '../../../Images/filtros.svg';


import './searchinput.scss'

const SearchInput = () => {
    const [allData, setAllData] = useState([]);
    const [filterData, setFilteredData] = useState(allData);
    const [selectedIngredient, setSelectedIngredient] = useState([])
    const [visibleIngredient, setVisibleIngredient] = useState(false)
    const [filtro, setFiltro] = useState([])
    const [visibleFiltro, setVisibleFiltro] = useState(false)


    useEffect(() => {
        axios('http://localhost:5000/api/ingredients')
            .then(response => {
                console.log(response.data)
                setAllData(response.data);
                setFilteredData(response.data);
                if (!response.data) {
                    alert('algo no va bien')
                } else { setAllData(response.data) }

            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    // hace que vaya sobreescribiendo en el input según vas escribiendo
    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);
        result = allData.filter((data) => {
            return data.name.search(value) != -1;
        });
        // esto hace que desaparezcan las opciones ofrecidas una vez empiezas a escribir de nuevo, borras el imput y se esconden las opciones
        setFilteredData(result);
        if (event.target.value.toLowerCase() == "") {
            setVisibleIngredient(false)
        } else { setVisibleIngredient(true) }

    }
    // esta función hace que le hagas click y selecciones el ingrediente, y lo añadimos al Array. Ingredient es el objeto completo que devuelve la API
    const handleClickIngredient = (ingredient) => {
        console.log(ingredient)
        setSelectedIngredient([...selectedIngredient, ingredient])
    }

    const toggleFilter = () => {
        setVisibleFiltro(!visibleFiltro)
    }


    return (
        <div className="searchinput-container">

            {visibleFiltro === true ? (
                <Filter configfilter={setFiltro} allfilter={filtro} togglefilter={setVisibleFiltro} visiblefilter={visibleFiltro} />
            ) : (<> <div className="inputsearch">
                <div className="inputsearch-img">
                    <button>
                        <Link to='./'>  <img className="inputsearch-img-imagen1" src={flechaizq} alt="icono de flecha izq" /></Link>
                    </button>
                </div>
                <div className="input-lupa">
                    <div className="inputsearch-input">
                        <input onChange={(event) => handleSearch(event)} className="inputsearch-input-inpt" type="text" name="search" placeholder="Escribe aquí tus ingredientes" />
                    </div>
                    <div className="inputsearch-img">
                        <button className="inputsearch-btn">
                            <img className="inputsearch-img-imagen2" src={lupa} alt="icono de lupa" />
                        </button>

                    </div>

                </div>
                <div className="inputsearch-img">
                    <button onClick={toggleFilter} className="inputsearch-filter">
                        <img className="inputsearch-filter-img" src={filtros} alt="icono de filtros" />
                    </button>
                </div>
            </div>

                <div>
                    {selectedIngredient.map((value) => {
                        return (
                            // <div>
                            //     <img src={pescado} img={value.name}/>

                            // </div>
                            <div>
                                <h2>{value.name}</h2>

                            </div>

                        )

                    })}

                </div>
                <div>
                    {filtro.map((value) => {
                        return (
                            // <div>
                            //     <img src={pescado} img={value.name}/>

                            // </div>
                            <div>
                                <h2>{value}</h2>

                            </div>

                        )

                    })}

                </div>
                <div style={{ padding: 10 }}>
                    <ul>
                        {filterData.map((value) => {
                            return (
                                <li>
                                    <div onClick={() => handleClickIngredient(value)} style={styles} key={value.id} style={visibleIngredient === true ? { display: 'block' } : { display: 'none' }}>
                                        {value.name}

                                    </div>
                                </li>

                            )
                        })}
                    </ul>
                </div>
            </>
            )}

        </div>
    );
};


export default SearchInput

const styles = {
    display: 'inline',
    width: '30%',
    height: 50,
    float: 'left',
    padding: 5,
    border: '0.5px solid black',
    marginBottom: 10,
    marginRight: 10
}
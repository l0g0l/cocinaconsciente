import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import lupa from '../../../Images/lupa.svg';
import flechaizq from '../../../Images/flechaizq.svg';
import Filter from '../../-All/Filter/Filter'
import filtros from '../../../Images/filtros.svg';
import ensaladera from '../../../Images/ensaladera.svg'
import beans from "../../../Images/iconosAlimentos/beans.svg";
import bacon from "../../../Images/iconosAlimentos/bacon.svg";
import fish from "../../../Images/iconosAlimentos/fish.svg";
import watermelon from "../../../Images/iconosAlimentos/watermelon.svg";


import './searchinput.scss'

const SearchInput = () => {
    const [allData, setAllData] = useState([]);// contendrá toda la información que recuperamos 
    const [filterData, setFilteredData] = useState(allData); // estado contendrá una copia del primer estado y luego el valor del segundo estado cambiará cuando busquemos una palabra en BBDD
    const [selectedIngredient, setSelectedIngredient] = useState([]) // guardar los alimentos que hemos seleccionado
    const [visibleIngredient, setVisibleIngredient] = useState(false)
    const [filtro, setFiltro] = useState([]) // guardar los filtros
    const [visibleFiltro, setVisibleFiltro] = useState(false) // renderizar vista de buscador o vista de filtros
    const [recipes, setRecipes] = useState([])


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

    useEffect(() => {
            console.log(selectedIngredient )
           
    }, [selectedIngredient]);


    // hace que vaya sobreescribiendo en el input del buscador
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
    // esta función hace que le hagas click y selecciones el ingrediente, y lo añadimos al Array. Ingredient es el objeto completo que devuelve la BBDD
    const handleClickIngredient = (ingredient) => {
        console.log(ingredient)
        setSelectedIngredient([...selectedIngredient, ingredient])

        // invocamos a la funcion getrecipes aqui porque es cuando seleciionamos tanto los ingredientes como los filtros
        getRecipes(selectedIngredient, filtro) 


    }
    // hacemos que cambie el renderizado de la vista de buscador a filtros
    const toggleFilter = () => {
        setVisibleFiltro(!visibleFiltro)
    }

    const getRecipes = async (ingredients, filters) => {
        console.log(ingredients, filters)
        console.log(selectedIngredient, filtro)

       
       // recorremos ingredientes ya que es un array de los ingredientes que metermos por el input para obtener un nuevo array donde se concatenene los ingredientes que vamos  join es para separar por comas
       let finalingredient = []
       ingredients.map((item => {
           finalingredient.push(item.name)
       }))
       let stringingredient = finalingredient.join(",")
       console.log(stringingredient)

       // para que no nos devuelva un string undefined, con este if le decimos que si viene undefined, porque no hemosm puesto ningun filtro, que no devuelva nada, y sino los filtros

      let stringfilter = typeof filters==="undefined"? "":filters

    
       let results = await axios.get(`http://localhost:5000/api/recipes?ingredients=${stringingredient}&typediet=${stringfilter}`)
       console.log(results.data)
       setRecipes(results.data)

         
    }


    return (
        <div className="searchinput-container">

            {visibleFiltro === true ? (
                <Filter configfilter={setFiltro} allfilter={filtro} togglefilter={setVisibleFiltro} visiblefilter={visibleFiltro} /> // le pasamos por props los filtros y el renderizado, estoe s para que renderice filtro y sino... renderiza buscador
            ) : (<>
                <div className="inputsearch">
                    <div className="inputsearch-img">
                        <button>
                            <Link to='./'>  <img className="inputsearch-img-imagen1" src={flechaizq} alt="icono de flecha izq" /></Link>
                        </button>
                    </div>
                    <div className="input-lupa">
                        <div className="inputsearch-input">
                            <input onChange={(event) => handleSearch(event)} className="inputsearch-input-inpt" type="text" name="search" placeholder="Escribe tus ingredientes"/>
                        </div>
                        <div className="inputsearch-img">
                            <button className="inputsearch-btn">
                                <Link to='./resultadosrecetas'><img className="inputsearch-img-imagen2" src={lupa} alt="icono de lupa" /></Link> 
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
                        // hacemos este map para que nos devuelva cada uno de los ingredientes que hemos seleccionado
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
                    // hacemos este map para que nos devuelva cada uno de los ingredientes de la lista de la BBDD

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
                <div >
                    <ul>
                        {filterData.map((value) => {
                            // hacemos este map para que nos devuelva cada uno de los filtros que hemos seleccionado, cambiando el renderizado

                            return (
                                <li>
                                    <div onClick={() => handleClickIngredient(value)}  ey={value.id}k style={visibleIngredient === true ? { display: 'block' } : { display: 'none' }}  >
                                        {value.name}

                                    </div>
                                </li>

                            )
                        })}
                    </ul>
                </div>
            </>
            )}
            <div className="background" >
            <div className="inputsearch-txt" >
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
           
        </div>
    );
};


export default SearchInput

// const styles = {
    
//     width: '30%',
//     height: 50,
//     float: 'left',
//     padding: 5,
//     border: '0.5px solid black',
//     marginBottom: 10,
//     marginRight: 10

// }


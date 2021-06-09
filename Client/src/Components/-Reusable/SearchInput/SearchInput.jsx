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
import aspa from '../../../Images/aspa.svg'
import TxtBtn from '../../-All/Txt-Btn/Txt-Btn'





import './searchinput.scss'

const SearchInput = () => {
    const [allData, setAllData] = useState([]);// contendrá toda la información que recuperamos 
    const [filterData, setFilteredData] = useState(allData); // estado contendrá una copia del primer estado y luego el valor del segundo estado cambiará cuando busquemos una palabra en BBDD
    const [selectedIngredient, setSelectedIngredient] = useState([]) // guardar los alimentos que hemos seleccionado
    const [visibleIngredient, setVisibleIngredient] = useState(false) //oculta la lista completa de ingredientes que hay en la BBDD
    const [filtro, setFiltro] = useState([]) // guardar los filtros
    const [visibleFiltro, setVisibleFiltro] = useState(false) // renderiza vista de buscador o vista de filtros
    const [recipes, setRecipes] = useState([]) // guarda las recetas 
    const [visibleBackground, SetVisibleBackground] = useState(true) // esconde o muestra la ensaladera cuando empezamos a escribir los ingredientes
    const [visibleTxtBtn, setVisibleTxtBtn] = useState(false) // esconde o muestra el componente del txt-btn cuando hemos seleccionado el primer ingrediente
    const [fetchRecipes, setFetchRecipes] = useState({}) // guardamos el resultado de las recetas una vez hecha la busqueda y los parámetros de esa búsqueda (stringfilter: filtros seleccionados, stringingredient: ingredientes ya seleccionados)


    useEffect(() => {
        console.log('TEST')
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
        console.log(selectedIngredient, filtro)


        // recorremos ingredients que es un array y metemos en un nuevo array cada uno de los ingredientes que introoducimos en el input yu con join los separam os por comas
        let finalingredient = []
        selectedIngredient.map((item => {
            finalingredient.push(item.name)
        }))
        let stringingredient = finalingredient.join(",")
        console.log(stringingredient)
        console.log()


        // para que no nos devuelva un string undefined, con este if le decimos que si viene undefined, porque no hemos puesto ningun filtro, que no devuelva nada, y sino los filtros
        let finalfilter = []
        filtro.map((item) => {
            finalfilter.push(item.dbfilter_name)
        })
        let stringfilter = finalfilter.join(",")
        console.log(stringfilter)

        let url = `http://localhost:5000/api/recipes?ingredients=${stringingredient}&typeDiet=${stringfilter}`
        console.log(url)
        axios.get(url).then(response => {
            console.log(response.data)
            setRecipes(response.data)
            console.log(recipes.length)


            setFetchRecipes({ stringingredient: stringingredient, stringfilter: stringfilter, recipes: response.data })
        })


    }, [selectedIngredient, filtro]);


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
            SetVisibleBackground(true)
        } else {
            setVisibleIngredient(true)
            SetVisibleBackground(false)
        }

    }
    // esta función hace que le hagas click y selecciones el ingrediente, y lo añadimos al Array. Ingredient es el objeto completo que devuelve la BBDD
    const handleClickIngredient = (ingredient) => {
        console.log(ingredient)
        setSelectedIngredient([...selectedIngredient, ingredient])
        console.log(fetchRecipes)


        // invocamos a la funcion getrecipes aqui porque es cuando seleciionamos tanto los ingredientes como los filtros
        // getRecipes(selectedIngredient, filtro)
        setVisibleTxtBtn(true)

    }

    // hacemos que cambie el renderizado de la vista de buscador a filtros
    const toggleFilter = () => {
        setVisibleFiltro(!visibleFiltro)
    }

    // con un filter lo que hago es que del array filtro el que quiero borrar por eso le digo que item.id (que es lo que contiene selectedingredients sea distinto a ingredients.id) que es el elemento que quiero quitar. Luego para que se quite del renderizado tengo que setear el estado
    const handleClickDeleteIngredient = (ingredient) => {
        console.log(ingredient)
        console.log(selectedIngredient)
        let ingredientdeleted = selectedIngredient.filter(item => item._id != ingredient._id)
        console.log(ingredientdeleted)
        setSelectedIngredient(ingredientdeleted)
    }

    const handleClickDeleteFilter = (filter) => {
        console.log(filter)
        console.log(filtro)
        let filterdeleted = filtro.filter(item => item.name != filter.name)
        console.log(filterdeleted)
        setFiltro(filterdeleted)
    }

    return (
        <div className="searchinput-container">

            {visibleFiltro === true ? (
                <Filter configfilter={setFiltro} allfilter={filtro} togglefilter={setVisibleFiltro} visiblefilter={visibleFiltro} /> // le pasamos por props los filtros y el renderizado, estoe s para que renderice filtro y sino... renderiza buscador
            ) : (<>

                <div className="inputsearch">
                    <div className="inputsearch-img">
                        <button>
                            <Link to='./home'>  <img className="inputsearch-img-imagen1" src={flechaizq} alt="icono de flecha izq" /></Link>
                        </button>
                    </div>
                    <div className="input-lupa">
                        <div className="inputsearch-input">
                            <input onChange={(event) => handleSearch(event)} className="inputsearch-input-inpt" type="text" name="search" placeholder="Escribe tus ingredientes" autoComplete="off"/>
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

                <div className="yellowcontainer-slc">
                    {selectedIngredient.map((value) => {
                        // hacemos este map para que nos devuelva cada uno de los ingredientes que hemos seleccionado
                        return (

                            <div className="yellowcontainer1-icons-bckg-ingredients"  >

                                <img className="yellowcontainer1-icons-img" src={value.image} alt={value.image} />
                                <img className="aspa" src={aspa} alt="aspa" onClick={() => handleClickDeleteIngredient(value)} />
                                <p className="txt-icon-ingredient" >{value.name}</p>
                            </div>
                        )

                    })}

                    <div>
                        {filtro.map((value) => {
                            console.log(value)
                            // hacemos este map para que nos devuelva cada uno de los filtros 

                            return (

                                <div className="filter-aspa" >
                                    <div className="first">
                                        <img className="filtro" src={`/images/${value.img}`} alt={value.img} />
                                    </div>
                                    <div className="second">
                                        <img className="aspa" src={aspa} alt="aspa" onClick={() => handleClickDeleteFilter(value)} />
                                        <p className="txt-icon-ingredient" >{value.name}</p>
                                    </div>

                                </div>
                            )

                        })}

                    </div>

                </div>
                <div >

                    <ul className="yellowcontainer1">
                        {filterData.map((value) => {
                            // hacemos este map para que nos devuelva cada uno de los ingredientes que hemos escrito en el imput, cambiando el renderizado y escondiendo la ensaladera. CAda vez que escondemos o no algo, tenemos que crear un state y meterlo en la funcion que corresponda, en este caso setFilteredData

                            return (
                                <li>
                                    <div className="yellowcontainer1-icons-bckg-ingredients" onClick={() => handleClickIngredient(value)} key={value.id} style={visibleIngredient === true ? { display: 'block' } : { display: 'none' }}  >
                                        <img className="yellowcontainer1-icons-img" src={value.image} alt={value.image} />
                                        <p className="txt-icon-ingredient" >{value.name}</p>

                                    </div>
                                </li>

                            )
                        })}
                    </ul>

                </div>
            </>
            )}
            <div className="background" style={visibleBackground === true ? { display: 'block' } : { display: 'none' }}>
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
            {visibleTxtBtn === true ? (
                <div >
                    <TxtBtn infoFetchRecipe={fetchRecipes} />
                </div>
            ) : ""}


        </div>
    );
};


export default SearchInput



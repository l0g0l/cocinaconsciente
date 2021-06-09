import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import lupa from '../../../Images/lupa.svg';
import flechaizq from '../../../Images/flechaizq.svg';
import filtros from '../../../Images/filtros.svg';
import CardReceipeDetails from '../../-Reusable/CardReceipeDetails/CardReceipeDetails'
import menos from '../../../Images/menos.svg';
import mas from '../../../Images/mas.svg';
import recomendaciones from '../../../Images/recomendaciones.svg';
import StarRatingBig from '../../-Reusable/StarRatingBig/StarRatingBig';
import authHeader from '../../../Services/auth-header'  // añadimos esto para comprovar autenticacion jwt y el headers en todos los axios




import './recipedetails.scss'


const RecipeDetails = (props) => {



    const query_params = new URLSearchParams(props.location.search)
    const recipeid = query_params.get('recipeid')
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        let url = `http://localhost:5000/api/recipes/${recipeid}`
        axios.get(url , {headers:authHeader()}).then(response => {
            console.log(response.data)
            setRecipes([response.data])
        })
    }, [recipeid]);

    return (
        <div className="receipedetails-container" >
            <div className="inputsearch" >
                <div className="inputsearch-img" >
                    <button onClick={() => props.history.goBack()}>
                        <img className="inputsearch-img-imagen1" src={flechaizq} alt="icono de flecha izq" />
                    </button>
                </div>
                <div className="input-lupa">
                    <div className="inputsearch-input">
                        <input className="inputsearch-input-inpt" type="text" name="search" placeholder="Escribe tus ingredientes" />
                    </div>
                    <div className="inputsearch-img">
                        <button className="inputsearch-btn">
                            <Link to='./resultadosrecetas'><img className="inputsearch-img-imagen2" src={lupa} alt="icono de lupa" /></Link>
                        </button>

                    </div>

                </div>
                <div className="inputsearch-img">
                    <button className="inputsearch-filter">
                        <img className="inputsearch-filter-img" src={filtros} alt="icono de filtros" />
                    </button>
                </div>
            </div>
          
            {recipes.map((value) => {
                // hacemos este map para que nos devuelva cada uno de los ingredientes que hemos seleccionado
                return (
                    <div>

                        <CardReceipeDetails nameRecipe={value.nameRecipe} image={value.image} id={value._id} time={value.prepTime} difficulty={value.difficulty} />


                        <div className="txt">
                            <div>
                                <p className="txt-title1">Porciones</p>
                            </div>
                            <div className="numberportions">
                                <div className="txt">
                                    <img className="txthome" src={menos} alt="signo menos" />
                                </div>

                                <div className="txt">
                                    <p className="txt-title">{value.portions}</p>
                                </div>

                                <div className="txt">
                                    <img src={mas} alt="signo más" />
                                </div>
                            </div>

                            <div className="txt">
                                <p className="txt-title">Ingredientes</p>
                            </div>

                            <div className="txt">
                                <p className="txt-texto">{value.ingredients.join(", ")}</p>
                            </div>

                            <div className="txt">
                                <p className="txt-title">Elaboración</p>
                            </div>

                            <div className="txt">
                                <p className="txt-texto"> {value.elaboration}</p>
                            </div>

                            <div className="txt">
                                <p className="txt-title">Valora una receta</p>
                                <StarRatingBig />
                            </div>

                            <div className="recomendations">

                                <img className="imgrecomendations" src={recomendaciones} alt="recomendaciones" />
                                <p>
                                    ¿Sabías que en los hogares españoles se tira aproximadamente 1.339 millones de Kilos/litros de comida y bebida al año y cerca de 820 millones de personas a nivel global padecen hambre? ¿Cómo podríamos, desde nuestros hogares, evitar el desperdicio y ayudar a la humanidad y al planeta?:
                                    Planifica un menú semanal, compra sólo lo necesario, almacena los alimentos correctamente, ten en cuenta la diferencia entre fechas de consumo preferente y caducidad, congela correctamente los alimentos, coloca los alimentos más viejos delante de los nuevos, aprovecha los alimentos para otra comida.
                                        Busca más recetas y encuentra consejos para aprovechar tus alimentos.</p>

                            </div>

                        </div>
                    </div>
                )

            })}
        </div>
    )
}

export default RecipeDetails

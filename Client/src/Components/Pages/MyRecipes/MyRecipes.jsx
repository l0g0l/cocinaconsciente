import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import inputbuscador from "../../../Images/inputbuscador.svg";
import blueberries from "../../../Images/iconosAlimentos/blueberries.svg";
import broccoli from "../../../Images/iconosAlimentos/broccoli.svg";
import chocolate from "../../../Images/iconosAlimentos/chocolate.svg";
import hamburguer from "../../../Images/iconosAlimentos/hamburguer.svg";
import Card from '../../-Reusable/Card/Card'

import "./myrecipes.scss";

const MyRecipes = () => {
    let history = useHistory();
    const sendSearch = () => {
        history.push("/buscador");
    }
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        let url = `http://localhost:5000/api/recipes/popular/7`
        axios.get(url).then(response => {
            console.log(response.data)
            setRecipes(response.data)
        })
    }, []);
    return (
        <div className="home-container">
            <div className="imgcontainer1">
                <h2 className="imgcontainer1-txt">Tus recetas favoritas siempre a tu alcance</h2>

            </div>
            <div className="yellowcontainer3">
                <div className="yellowcontainer3-txt">
                    <p className="yellowcontainer3-txt-texto">
                        Nam Ñam
                    </p>
                </div>
                <div className="yellowcontainer3-icons">
                    <div className="yellowcontainer3-icons-bckg">
                        <img
                            className="yellowcontainer3-icons-img"
                            src={blueberries}
                            alt="blueberries"
                        />
                        <p>Arándanos</p>
                    </div>
                    <div className="yellowcontainer3-icons-bckg">
                        <img
                            className="yellowcontainer3-icons-img"
                            src={broccoli}
                            alt="broccoli"
                        />
                        <p>Brócoli</p>
                    </div>
                    <div className="yellowcontainer3-icons-bckg">
                        <img
                            className="yellowcontainer3-icons-img"
                            src={chocolate}
                            alt="chocolate"
                        />
                        <p>Chocolate</p>
                    </div>
                    <div className="yellowcontainer3-icons-bckg">
                        <img
                            className="yellowcontainer3-icons-img"
                            src={hamburguer}
                            alt="hamburguer"
                        />
                        <p>Burguer</p>
                    </div>
                </div>

            </div>
            <div className="txthome">
                <p>Las recetas más populares</p>
                {recipes.map((value) => {
                    // hacemos este map para que nos devuelva cada uno de los ingredientes que hemos seleccionado
                    return (
                        <div>
                            <Card nameRecipe={value.nameRecipe} image={value.image} id={value._id} activatedheart={true} />
                        </div>
                    )

                })}

            </div>

        </div>
    );
};

export default MyRecipes;




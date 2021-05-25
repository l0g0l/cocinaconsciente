import React from "react";
import { useHistory } from 'react-router-dom';
import inputbuscador from "../../../Images/inputbuscador.svg";
import beans from "../../../Images/iconosAlimentos/beans.svg";
import bacon from "../../../Images/iconosAlimentos/bacon.svg";
import fish from "../../../Images/iconosAlimentos/fish.svg";
import watermelon from "../../../Images/iconosAlimentos/watermelon.svg";

import "./home.scss";

const Home = () => {
    let history = useHistory();
    const sendSearch = () => {
        history.push("/buscador");
    }
    return (
        <div className="home-container">
            <div className="imgcontainer">
                <h2 className="imgcontainer-txt">¿No sabes qué cocinar con lo  que tienes por casa?</h2>
                <button className="imgcontainer-btn">
                    <img
                        className="imgcontainer-btn-img"
                        src={inputbuscador}
                        alt="input de buscador"
                        onClick={sendSearch}
                    />
                </button>
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
                            alt="manzana"
                        />
                    </div>
                    <div className="yellowcontainer-icons-bckg">
                        <img
                            className="yellowcontainer-icons-img"
                            src={fish}
                            alt="pescado"
                        />
                    </div>
                    <div className="yellowcontainer-icons-bckg">
                        <img
                            className="yellowcontainer-icons-img"
                            src={bacon}
                            alt="beicon"
                        />
                    </div>
                    <div className="yellowcontainer-icons-bckg">
                        <img
                            className="yellowcontainer-icons-img"
                            src={watermelon}
                            alt="pescado"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

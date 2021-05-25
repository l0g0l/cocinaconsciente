import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import facebook from '../../../Images/facebook.svg'
import instagram from '../../../Images/instagram.svg'
import pinterest from '../../../Images/pinterest.svg'
import google from '../../../Images/google.svg'
import copyright from '../../../Images/copyright.svg'

import './footer.scss'


const Footer = () => {
    let history = useHistory();
    const sendMyRecipes = () => {
      history.push("/misrecetas");
    }
    return (
        <div className="footer-container">
            <div className="txt-footer">
                <div className="txt-footer-div">
                    <h4 className="txt-footer-div-logo">Don't Waste!</h4>
                </div>
                <div className="txt-footer-div">
                    <p className="txt-footer-div-texto1">Encuentra inspiración con los ingredientes que tienes por casa</p>
                </div>
                <div className="txt-footer-btn">
                    <div className="txt-footer">
                        <p className="txt-footer-texto1">¿Y qué hago con lo que me queda en la despensa?</p>
                    </div>
                    <div className="txt-footer-btn">
                        <button onClick={sendMyRecipes} className="txt-footer-btn-recetas">Buscar Recetas</button>
                    </div>
                </div>
                <div className="txt-footer-links">
                    <div>
                        <div className="txt-footer-links-div">
                            <Link to="/misrecetas">Mis Recetas</Link>
                        </div>
                        <div className="txt-footer-links-div">
                            <Link to="/perfil">Perfil</Link>
                        </div>
                        <div className="txt-footer-links-div">
                            <Link to="/listasdelacompra">Mis Listas</Link>
                        </div>
                       
                    </div>
                    <div className="txt-footer-links-div">
                        <p className="txt-footer-links-div-p">Política de privacidad</p>
                        <p>Política de cookies</p>
                    </div>
                </div>
           
            <div className="txt-footer-rrss">
                <img className="txt-footer-rrss-1" src={instagram} alt="instagram" />
                <img className="txt-footer-rrss-1" src={facebook} alt="facebook" />
                <img className="txt-footer-rrss-1" src={pinterest} alt="pinterest" />
                <img className="txt-footer-rrss-1" src={google} alt="google" />
            </div>
            <div className="copyright">
                <img className="copyright-icon" src={copyright} alt="copyright" />
                <p className="copyright-txt" >2021 RETO DE TRIPULACIONES THE BRIDGE</p>
            </div>

        </div>

        </div >
    )
}

export default Footer

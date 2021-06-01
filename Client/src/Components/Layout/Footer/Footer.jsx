import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../../Images/facebook.svg';
import instagram from '../../../Images/instagram.svg';
import pinterest from '../../../Images/pinterest.svg';
import google from '../../../Images/google.svg';
import copyright from '../../../Images/copyright.svg';
import logo from '../../../Images/logo.svg';


import './footer.scss';


const Footer = () => {

    return (
        <div className="footer-container">
            <div className="txt-footer">
                <div className="txt-footer-div">
                    <img src={logo} alt="logo" className="txt-footer-div-logo" />
                </div>
                <div className="txt-footer-rrss">
                    <img className="txt-footer-rrss-1" src={instagram} alt="instagram" />
                    <img className="txt-footer-rrss-1" src={facebook} alt="facebook" />
                    <img className="txt-footer-rrss-1" src={pinterest} alt="pinterest" />
                    <img className="txt-footer-rrss-1" src={google} alt="google" />
                </div>
            </div>

                <div className="txt-footer-links-div">
                    <p className="txt-footer-links-div-p">Política de privacidad</p>
                    <p className="txt-footer-links-div-p">Política de cookies</p>
                    <p className="txt-footer-links-div-p">Aviso legal</p>
                </div>
           


            <div className="copyright">
                <img className="copyright-icon" src={copyright} alt="copyright" />
                <p className="copyright-txt" >2021 RETO DE TRIPULACIONES THE BRIDGE</p>
            </div>
            

        </div >
    )
}

export default Footer

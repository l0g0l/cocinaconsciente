//Módulos
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//Imgágenes
import wifi from "../../../Images/wifi.svg";
import ojo from "../../../Images/ojo.svg";

//SCSS
import './login.scss'





function Login() {
    // const [user, setUser] = useState({
    //     user: ''  
    //   });   
    //   const [passw, setPassw] = useState({
    //     password: ''  
    //   });    

    //   handleChange = event => {
    //     setUser({
    //       ...user, 
    //       [event.target.name]: event.target.value
    //     });
    //     setPassw({
    //         ...passw, 
    //         [event.target.name]: event.target.value
    //       });
    //   };


    return (
        <div className="containerLogin">
            <img className="wifi" src={wifi} alt="icono wifi" />
            <h3 className="bienvenido-txt">Bienvenido</h3>

            <div className="form-login">

                <input
                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                    name="email"
                    onChange
                    className="inputform" />
                <div className="inputojo">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        onChange
                        className="inputform" />
                    <img src={ojo} alt="icono ojo" />
                </div>

                <div className="form-login-txt">
                    <p className="form-login-txt-p">¿Has olvidado la contraseña?</p>
                    <p className="form-login-txt-p">¿No tienes cuenta? <Link to="./registro" className="formlink">Regístrate</Link></p>
                </div>

                <button onClick className="form-btn" type="submit">Iniciar sesión</button>

            </div>

        </div>
    )
}

export default Login




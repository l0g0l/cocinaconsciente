import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import BtnGreen from '../../-Reusable/Btn-Green/BtnGreen'
import loginrrss from '../../../Images/loginrrss.svg'
import correo from '../../../Images/correo.svg'

import AuthService from "../../../Services/auth.service";


import './login.scss'



const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Campo obligatorio
            </div>
        );
    }
};

const Login = (props, texto) => {
    const form = useRef();
    const checkBtn = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.login(email, password)
                .then(() => {
                    props.history.push("/");
                    window.location.reload();
                },
                    (error) => {
                        const resMessage =
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                            error.message ||
                            error.toString();

                        setLoading(false);
                        setMessage(resMessage);
                    }
                );
        } else {
            setLoading(false);
        }
    };

    return (
        <div className="col-md-12">
            <div className="card-container">
                <div className="logintxt">
                    <p className="logintxt-txt">Iniciar sesión</p>
                </div>
                <div className="logintxt">
                    <img src={loginrrss} className="logintxt-img" alt="login rrss" />
                </div>
                <div className="logintxt">
                    <img src={correo} className="logintxt-img1" alt="icono correo" />
                </div>

                <Form onSubmit={handleLogin} ref={form}>
                    <div className="form-group">
                        <Input
                            type="text"
                            className="form-group-control"
                            name="email"
                            placeholder="correo electrónico"
                            value={email}
                            onChange={onChangeEmail}
                            validations={[required]} />
                    </div>
                    <div className="form-group">
                        <Input
                            type="password"
                            className="form-group-control"
                            name="password"
                            placeholder="contraseña"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required]}
                        />

                    </div>
                    <div className="checkbox">
                        <input className="radio" type="radio" name="recuerdame" value="Recuérdame" />
                        <label for="Recuérdame">Recuérdame</label>

                    </div>
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />

                    <BtnGreen texto={'Iniciar Sesión'} />
                </Form>
                <div className="txtcontraseña">
                    <p >¿Olvidaste tu contraseña?</p>
                </div>
                <div className="checkbox-contraseña">
                    <p >¿Aún no estás registrado? <Link to="./registro">Regístrate ahora</Link></p>
                    <p >Comienza a aprovechar tus alimentos</p>
                </div>

            </div>
        </div>
    )

}

export default Login




import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
import CheckButton from "react-validation/build/button";
import BtnGreen from '../../-Reusable/Btn-Green/BtnGreen'
import loginrrss from '../../../Images/loginrrss.svg'
import correo from '../../../Images/correo.svg'
import flechaizq from '../../../Images/flechaizq.svg'

import AuthService from "../../../Services/auth.service";

import './signup.scss'

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Campo obligatorio
            </div>
        );
    }
};

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                No es un email válido
            </div>
        );
    }
};

const vname = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Por favor introduzca su nombre
            </div>
        );
    }
};

const vlastname = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Por favor introduzca sus apellidos
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 10 && value(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/)) {
        return (
            <div className="alert alert-danger" role="alert">
                Entre 6 y 10 caracteres. Debe contener al menos un número, mayúscula, minúscula y carácter especial
            </div>
        );
    }
};

const SignUp = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };

    const onChangeLastname = (e) => {
        const lastname = e.target.value;
        setLastname(lastname);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(name, lastname, email, password).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
        }

    };
    return (
        <div className="col-md-12">
            <div className="card-container">
                <div className="backarrow-container">
                    <div className="back">
                        <Link to="./"><img src={flechaizq} alt="flechaizq" /></Link>
                    </div>
                    <div className="logintxt">
                        <p className="logintxt-txt1">Crear cuenta</p>
                    </div>
                </div>


                <div className="logintxt">
                    <img src={loginrrss} className="logintxt-img" alt="loginrrss" />
                </div>
                <div className="logintxt">
                    <img src={correo} className="logintxt-img1" alt="correo" />
                </div>

                <Form onSubmit={handleRegister} ref={form}>
                    {!successful && (
                        <div>
                            <div className="form-group">
                                <Input
                                    type="text"
                                    className="form-group-control"
                                    name="name"
                                    value={name}
                                    placeholder="Nombre"
                                    onChange={onChangeName}
                                    validations={[required, vname]} />
                            </div>
                            <div className="form-group">
                                <Input
                                    type="text"
                                    className="form-group-control"
                                    name="lastname"
                                    value={lastname}
                                    placeholder="Apellidos"
                                    onChange={onChangeLastname}
                                    validations={[required, vlastname]} />
                            </div>

                            <div className="form-group">
                                <Input
                                    type="text"
                                    className="form-group-control"
                                    placeholder="Correo electrónico"
                                    name="email"
                                    value={email}
                                    onChange={onChangeEmail}
                                    validations={[required, validEmail]}
                                />
                            </div>

                            <div className="form-group">
                                <Input
                                    type="password"
                                    className="form-group-control"
                                    name="password"
                                    value={password}
                                    placeholder="Contraseña"
                                    onChange={onChangePassword}
                                    validations={[required, vpassword]}
                                />
                            </div>

                            <div className="form-group">

                            </div>
                        </div>
                    )}
                    {message && (
                        <div className="form-group">
                            <div
                                className={successful ? "alert alert-success" : "alert alert-danger"}
                                role="alert"
                            >
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                    <div className="checkbox-contraseña">
                        <input type="radio" name="terminos" value="terminos" />
                        <label for="terminos">Estoy de acuerdo con los <a href="#">Términos de uso</a></label>

                    </div>
                    <div className="btnsignin">
                        <BtnGreen texto={'Crear cuenta'} />

                    </div>

                </Form>

                <div className="checkbox-contraseña">
                    <label for="terminos">¿Ya tienes cuenta?<a href="./">Inicia sesión</a></label>

                </div>

            </div>

        </div>
    );
};

export default SignUp;
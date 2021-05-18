/* import React from 'react'

// Módulos
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'

// Imágenes
import wifi from "../../../Images/wifi.svg";

//SCSS
import './register.scss'



export default function Registro() {
    //React-hooks-form
    const { register, handleSubmit, formState: { errors } } = useForm()
    const url = '/api/register'

    // para vaciar el formulario
    const onSubmit = async (data) => {
        HTMLFormElement.reset()

        // data.password = md5(data.password)
        // conseguir que lance un POST en vez de GET
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'aplication/json' },
            body: JSON.stringify(data)
        }
        //     const response = await fetch([url], requestOptions);
        //     const jsonData = await response.json();

        // if(jsonData.msg === "Usuario Creado Correctamente") {
        //     window.location.href = "./"
        //   }else {alert(jsonData.msg)}ç
    }

    return (
        <div className="containerRegistro">
            <img className="wifi" src={wifi} alt="icono wifi" />
            <h3 className="resgistrate-txt">Regístrate</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="form-registro">
                <label htmlFor="nombre">Nombre</label>
                <input
                    id="nombre"
                    className="form-registro-input"
                    autoFocus
                    aria-invalid={errors.nombre ? "true" : "false"}
                    {...register('nombre', { required: true })} />
                {errors.nombre && (<span role="alert">Campo obligatorio</span>)}
                <br/>

                <label htmlFor="email">Correo Electrónico</label>
                <input
                    type="email"
                    id="email"
                    className="form-registro-input"
                    autoFocus
                    aria-invalid={errors.email ? "true" : "false"}
                    {...register('email', { required: true })} />
                {errors.email && (<span role="alert">Campo obligatorio</span>)}
                <br/>

                <label htmlFor="email">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    className="form-registro-input"
                    autoFocus
                    placeholder="Debe contener al menos 1 mayúscula, minuscula, número y carácter especial"
                    aria-invalid={errors.password ? "true" : "false"}
                    {...register('password',
                        { required: true },
                        {
                            pattern: {
                                value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                                message: <span className="errorMsg">Por favor introduzca una Password válida</span>
                            }
                        })} />
                {errors.password && (<span role="alert">Campo obligatorio</span>)}
                <br/>

                <button className="form-btn" type="submit">Registrarme</button>
            </form>

            <p className="form-p">¿Ya tienes cuenta?<Link to='./' className="formlink" >Inicia sesión</Link></p>

        </div>

    )
}
 */
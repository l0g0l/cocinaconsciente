import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'

import CheckButton from "react-validation/build/button";

import './btngreen.scss'

const BtnGreen = (props) => {
    return (
        <div>
            <div className="form-group-btn">
                        <button className="btn" disabled={props.loading}>
                            {props.loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Iniciar sesión</span>
                        </button>
                    </div>

                    {props.message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {props.message}
                            </div>
                        </div>
                    )}
        </div>
    )
}

export default BtnGreen

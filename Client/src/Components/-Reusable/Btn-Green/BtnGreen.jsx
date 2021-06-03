import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'

import CheckButton from "react-validation/build/button";

import './btngreen.scss'

const BtnGreen = ({texto}) => {
    return (
        <div>
            <div className="form-group-btn">
                        <button className="btn" disabled={texto.loading}>
                            {texto.loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>{texto}</span>
                        </button>
                    </div>

                    {texto.message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {texto.message}
                            </div>
                        </div>
                    )}
        </div>
    )
}

export default BtnGreen

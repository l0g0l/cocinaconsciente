import React from "react";


import './btngreen.scss'

const BtnGreen = (props) => {
    // console.log(props)
    return (
        <div>
            <div className="form-group-btn">
                <button className="btn" disabled={props.loading}>
                    {props.loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>{props.texto}</span>
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

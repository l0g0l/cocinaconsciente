import React from 'react';

import beans from "../../../Images/iconosAlimentos/beans.svg";

import './iconround.scss'

const IconRound = (props) => {
    return (
        <div>
            <div className="yellowcontainer-icons-bckg">
                <img className="yellowcontainer-icons-img" src={beans} alt="manzana"/>
                <p className="txt-icon ">judias</p>
            </div>

        </div>
    )
}

export default IconRound

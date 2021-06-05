import React, { useState, useEffect } from 'react';
import sinlactosa from '../../../Images/sinlactosa.svg'
import sinhuevo from '../../../Images/sinhuevo.svg'
import singluten from '../../../Images/singluten.svg'
import vegan from '../../../Images/vegan.svg'
import flechaizq from '../../../Images/flechaizq.svg';
import { Link } from 'react-router-dom';

import  './filter.scss'


const Filter = (props) => {
    const [clicked, setClicked] = useState(false)

    const handleClickFilter = (event) => {
        console.log(props)
        console.log(event)
        props.configfilter([...props.allfilter, event])
        


    }
    const applyfilter = () => {
        console.log(props)
        props.togglefilter(!(props.visiblefilter))
    }
    return (
        <div>
            <div className="arrowtxt">

                <div className="inputsearch-img">
                    <button>
                        <Link to='./'>  <img className="inputsearch-img-imagen1" src={flechaizq} alt="icono de flecha izq" /></Link>
                    </button>
                </div>
                <div className="filter-txt">
                    <p>Seleccione los filtros a aplicar:</p>
                </div>
            </div>
            <div className="filter-list"  >
                <ul>
                    <li onClick={() => handleClickFilter('Sin Gluten')}  style={clicked === true ? {color:'#333333'}: {color:'grey'}}>
                        <img src={singluten} />
                        Sin gluten
                    </li>
                    <li onClick={() =>handleClickFilter('Vegetariano')}  style={clicked === true ? {color:'#333333'}: {color:'grey'}}>
                        <img src={vegan} />
                    Vegetariano</li>
                    <li onClick={() =>handleClickFilter('Sin Huevo')} style={clicked === true ? {color:'#333333'}: {color:'grey'}}>
                        <img src={sinhuevo} />
                    Sin huevo</li>
                    <li onClick={() => handleClickFilter('Sin Lactosa')}  style={clicked === true ? {color:'#333333'}: {color:'grey'}}>
                        <img src={sinlactosa} />
                    Sin lactosa</li>
                </ul>

            </div>
            <div className="inputsearch-img">
                    <button onClick={applyfilter}>Aplicar Filtros
                       <img className="inputsearch-img-imagen1" src={flechaizq} alt="icono de flecha izq" />
                    </button>
                </div>

        </div>
    )
}

export default Filter

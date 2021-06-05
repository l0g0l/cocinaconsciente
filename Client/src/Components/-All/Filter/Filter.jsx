import React, { useState, useEffect } from 'react';
import sinlactosa from '../../../Images/sinlactosa.svg'
import sinhuevo from '../../../Images/sinhuevo.svg'
import singluten from '../../../Images/singluten.svg'
import vegan from '../../../Images/vegan.svg'
import flechaizq from '../../../Images/flechaizq.svg';
import { Link } from 'react-router-dom';


import  './filter.scss'


const Filter = (props) => {
    const [clicked1, setClicked1] = useState(false) // guardamos el state para saber si hemos clickado un flitro
    const [clicked2, setClicked2] = useState(false) // guardamos el state para saber si hemos clickado un flitro
    const [clicked3, setClicked3] = useState(false) // guardamos el state para saber si hemos clickado un flitro
    const [clicked4, setClicked4] = useState(false) // guardamos el state para saber si hemos clickado un flitro





    const handleClickFilter = (event, id) => {
        console.log(props)
        console.log(event, id)
        props.configfilter([...props.allfilter, event]) //le pasamos las props al componente, event es todo el objeto

        // cambia el color del texto de gris a negro cuando se clicka
        if(id===1){
            setClicked1(!clicked1)
        }
        if(id===2){
            setClicked2(!clicked2)
        }
        if(id===3){
            setClicked3(!clicked3)
        }
        if(id===4){
            setClicked4(!clicked4)
        }
 

    }
    const applyfilter = () => {
        console.log(props)
        props.togglefilter(!(props.visiblefilter)) // props para renderizar filtros
    }
    return (
        <div>
            <div className="arrowtxt">

                {/* <div className="inputsearch-img">
                    <button>
                        <Link to='./buscador'>  <img className="inputsearch-img-imagen1" src={flechaizq} alt="icono de flecha izq" /></Link>
                    </button>
                </div> */}
                <div className="filter-txt">
                    <p>Seleccione los filtros a aplicar:</p>
                </div>
            </div>
    
            <div className="filter-list"  >
                
                <ul>
                    <li onClick={() => handleClickFilter('Sin Gluten', 1)}  style={clicked1 === true ? {color:'#333333'}: {color:'grey'}}> 
                        <img src={singluten} />
                        Sin gluten 
                    </li>
                    <li onClick={() =>handleClickFilter('Vegetariano', 2)}  style={clicked2 === true ? {color:'#333333'}: {color:'grey'}}>
                        <img src={vegan} />
                    Vegetariano</li>
                    <li onClick={() =>handleClickFilter('Sin Huevo', 3)} style={clicked3 === true ? {color:'#333333'}: {color:'grey'}}>
                        <img src={sinhuevo} />
                    Sin huevo</li>
                    <li onClick={() => handleClickFilter('Sin Lactosa', 4)}  style={clicked4 === true ? {color:'#333333'}: {color:'grey'}}>
                        <img src={sinlactosa} />
                    Sin lactosa</li>
                </ul>

            </div>
            <div className="btn-green">
                    <button className="btn" onClick={applyfilter}>Aplicar flitros</button>
                </div>

        </div>
    )
}

export default Filter

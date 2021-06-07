import React, { useState, useEffect } from 'react';
import sinlactosa from '../../../Images/sinlactosa.svg'
import sinhuevo from '../../../Images/sinhuevo.svg'
import singluten from '../../../Images/singluten.svg'
import vegan from '../../../Images/vegan.svg'
import flechaizq from '../../../Images/flechaizq.svg';


import  './filter.scss'


const Filter = (props) => {
    const [clicked1, setClicked1] = useState(false) // guardamos el state para saber si hemos clickado un filtro
    const [clicked2, setClicked2] = useState(false) // guardamos el state para saber si hemos clickado un filtro
    const [clicked3, setClicked3] = useState(false) // guardamos el state para saber si hemos clickado un filtro
    const [clicked4, setClicked4] = useState(false) // guardamos el state para saber si hemos clickado un filtro


    const handleClickFilter = (namefilter, id, image) => {
        console.log(props)
        console.log(namefilter, id, image)
        props.configfilter([...props.allfilter, {name: namefilter, img:image}]) //le pasamos las props al componente, namefilter es todo el objeto

        // cambia el color del texto de gris a negro cuando se clicka, hay que ponerle un stado a cada botón. Le tengo que dar un id a cada botón y se lo paso por parámetro
        if(id===1){
            setClicked1(!clicked1) // hay que setear al cotrario de clicked, que es false, por tanto seteas a true
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
        props.togglefilter(!(props.visiblefilter)) // props para renderizar vista filtros
    }



    return (
        <div>
            <div className="arrowtxt">

                <div className="filter-txt">
                    <p>Seleccione los filtros a aplicar:</p>
                </div>
            </div>
    
            <div className="filter-list"  >
                
                <ul>
                    <li onClick={() => handleClickFilter('Sin Gluten', 1, 'singluten.svg')}  style={clicked1 === true ? {color:'#000', textDecoration: 'underline'} : {color:'grey'}}> 
                        <img src={singluten} />
                        Sin gluten 
                    </li>
                    <li onClick={() =>handleClickFilter('Vegetariano', 2, 'vegan.svg')}  style={clicked2 === true ? {color:'#000', textDecoration: 'underline'}: {color:'grey'}}>
                        <img src={vegan} />
                    Vegetariano</li>
                    <li onClick={() =>handleClickFilter('Sin Huevo', 3, 'sinhuevo.svg')} style={clicked3 === true ? {color:'#000', textDecoration: 'underline'}: {color:'grey'}}>
                        <img src={sinhuevo} />
                    Sin huevo</li>
                    <li onClick={() => handleClickFilter('Sin Lactosa', 4, 'sinlactosa.svg')}  style={clicked4 === true ? {color:'#000', textDecoration: 'underline'}: {color:'grey'}}>
                        <img src={sinlactosa} />
                    Sin lactosa</li>
                </ul>

            </div>
            <div className="btn-green">
                    <button className="btnfiltros" onClick={applyfilter}>Aplicar flitros</button>
                </div>

        </div>
    )
}

export default Filter

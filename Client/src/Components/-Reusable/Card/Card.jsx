import React from 'react';
import { Link } from 'react-router-dom';

import StarRating from '../../-Reusable/StarRating/StarRating'
import favorita from '../../../Images/favorita.svg';
import favoritarellena from '../../../Images/favoritarellena.svg';



import './card.scss'


const Card = (props) => {
    console.log(props)
    //rellenamos la Card con los datos que nos llegan por props
    return (
        <div>
            <Link to={`./detallerecetas?recipeid=${props.id}&activatedheart=${props.activatesheart}`}>
                <div className="cardreceta">
                    <div className="cardreceta-imgrcp">
                        <img className="cardreceta-imgrcp-img" src={props.image} alt="cardreceta-img" />
                    </div>
                    <div className="cardreceta-txt-img">
                        <div className="cardreceta-txt">
                            <p className="cardreceta-txt">{props.nameRecipe}</p>

                        </div>
                        <div className="cardreceta-img">

                            <img src={props.activatedheart === true ? favoritarellena : favorita} alt="corazón" />
                        </div>

                    </div>
                    <div className="star">
                        <StarRating />
                    </div>

                </div></Link>

        </div>
    )
}

export default Card

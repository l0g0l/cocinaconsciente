import React from 'react';
import { Link } from 'react-router-dom';

import receta from '../../../Images/receta.svg';
import StarRating from '../../-Reusable/StarRating/StarRating'
import favorita from '../../../Images/favorita.svg';


import './card.scss'


const Card = (props) => {
    return (
        <div>
           <Link to="./detallerecetas"> <div className="cardreceta">
                <div className="cardreceta-imgrcp">
                    <img className="cardreceta-imgrcp-img" src={props.image} alt="cardreceta-img" />
                </div>
                <div className="cardreceta-txt-img">
                    <div className="cardreceta-txt">
                        <p className="cardreceta-txt">{props.nameRecipe}</p>

                    </div>
                    <div className="cardreceta-img">

                        <img src={favorita} alt="corazón" />
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

import React from 'react';

import receta from '../../../Images/receta.svg';

import './card.scss'


const Card = () => {
    return (
        <div>
            <div className="cardreceta">
                <img src={receta} alt="cardreceta-receta" />

            </div>

        </div>
    )
}

export default Card

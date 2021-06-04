import React from 'react'

const Recipes = () => {
    return (
        <div>
             <button className="imgcontainer-btn">
                    <img
                        className="imgcontainer-btn-img"
                        src={inputbuscador}
                        alt="input de buscador"
                        onClick={sendSearch}
                    />
                </button>
        </div>
    )
}

export default Recipes

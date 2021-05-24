import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import hamburguesa from '../../../Images/hamburguesa.png';


import navmenu from '../NavMenu/navmenu.scss';




const NavMenu = ({ background, hoverBackground, linkColor, logo }) => {
    const [ navOpen, setNavOpen ] = useState(0)
    const [ hoverIndex, setHoverIndex ] = useState(-1)
    const paths = [
        {
            text: 'Home',
            path: '/home',
            icon: 'ion-ios-home'
            
        },
        {
            text: 'Perfil',
            path: '/perfil',
            icon: 'ion-ios-home'
        },
        {
            text: 'Mis Listas de la Compra',
            path: '/mislistasdelacompra',
            icon: 'ion-ios-home'
            
        },
        {
            text: 'Mis Recetas',
            path: '/misrecetas',
            icon: 'ion-ios-home'
           
        },
        {
            text: 'Log out',
            path: '/logout',
            icon: 'ion-ios-home'
        },
      
    ]
    return (
        <nav
            className="responsive-toolbar"
            style={{ background: background }}>

            <ul
                style={{ background: background }}
                className={ navOpen ? 'active' : '' }>

                <figure className="image-logo" onClick={ () => { setNavOpen(!navOpen) } }>
                    {/* <img src={ hamburguesa } height="27px" width="27px" alt="toolbar-logo" /> */}
                    <p>Don't Waste!</p>
                </figure>

                { paths.map((link, index) => 
                    <li
                        key={ index }
                        onMouseEnter={ () => { setHoverIndex(index) } }
                        onMouseLeave={ () => { setHoverIndex(-1) } }
                        style={{ background: hoverIndex === index ? (hoverBackground || '#D7D2D2') : '' }}>
                        <Link
                            to={link.path}
                            style={{ color: linkColor }}>   
                            { link.text }
                            <i className={ link.icon }/>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}
export default NavMenu

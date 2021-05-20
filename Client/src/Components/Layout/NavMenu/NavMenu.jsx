import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ojo from '../../../Images/ojo.svg';


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
            text: 'Profile',
            path: '/profile',
            icon: 'ion-ios-home'
        },
        {
            text: 'Shoplists',
            path: '/shoplists',
            icon: 'ion-ios-home'
            
        },
        {
            text: 'Tips',
            path: '/tips',
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
                    <img src={ ojo } height="40px" width="40px" alt="toolbar-logo" />
                </figure>

                { paths.map((link, index) => 
                    <li
                        key={ index }
                        onMouseEnter={ () => { setHoverIndex(index) } }
                        onMouseLeave={ () => { setHoverIndex(-1) } }
                        style={{ background: hoverIndex === index ? (hoverBackground || '#fcb320') : '' }}>
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

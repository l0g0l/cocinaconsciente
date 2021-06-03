import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaBeer } from 'react-icons/fa';


import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { FiLogIn } from "react-icons/fi";


import logo from '../../../Images/logo.svg'

import './navmenuhamburg.scss';


function Navbar() {
  const SidebarData = [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'Iniciar sesión/Crear Cuenta',
      path: '/registro',
      icon: <FiLogIn    />,
      cName: 'nav-text'
    },
    {
      title: 'Sobre Nosotros',
      path: '#',
      icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text'
    }
  ];
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="navmenu-container">

      <IconContext.Provider value={{ color: ' #628f22 ', size:'1.5em' }}>
        <div className='navbar-div'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <img src={logo} className='navbar-div-logo' />
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                {/* <AiIcons.AiOutlineClose /> */}
              </Link>
            </li>
            <div className="container-menu-hamb">
              <div className="logohmb">
                <img className="logohmb-hmb" src={logo} alt="logo" />
              </div>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span className="hamb">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </div>

          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;

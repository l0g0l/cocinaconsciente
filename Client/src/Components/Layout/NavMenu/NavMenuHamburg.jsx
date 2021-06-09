import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';


import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri'
import * as GiIcons from 'react-icons/gi'
import * as CgIcons from 'react-icons/cg'
import * as BiIcons from 'react-icons/bi'


import logo from '../../../Images/logo.svg';
import close from '../../../Images/close.svg';


import './navmenuhamburg.scss';


function Navbar() {
  const SidebarData = [
    {
      title: 'Home',
      path: '/home',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'Mi perfil',
      path: '/perfil',
      icon: <CgIcons.CgProfile />,
      cName: 'nav-text'
    },
    {
      title: 'Lista de la compra',
      path: '/listadelacompra',
      icon: <RiIcons.RiFileList3Line />,
      cName: 'nav-text'
    },
    {
      title: 'Mis recetas favoritas',
      path: '/misrecetas',
      icon: <GiIcons.GiCookingPot />,
      cName: 'nav-text'
    },
    {
      title: 'Sobre Nosotros',
      path: '#',
      icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text'
    }, {
      title: 'Cerrar sesión',
      path: '#',
      icon: <BiIcons.BiLogOut />,
      cName: 'nav-text'
    }
  ];
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="navmenu-container">

      <IconContext.Provider value={{ color: ' #628f22 ', size: '1.5em' }}>
        <div className='navbar-div'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <img src={logo} className='navbar-div-logo' alt="logo" />
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
              </Link>
            </li>
            <div className="container-menu-hamb">
              <div className="logohmb">
                <img className="logohmb-close" src={close} alt="cierre" />
              </div>
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

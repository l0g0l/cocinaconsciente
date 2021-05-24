import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


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
          title: 'Perfil',
          path: '/perfil',
          icon: <IoIcons.IoIosPaper />,
          cName: 'nav-text'
        },
        {
          title: 'Mis Listas',
          path: '/mislistasdelacompra',
          icon: <FaIcons.FaCartPlus />,
          cName: 'nav-text'
        },
        {
          title: 'Mis Recetas',
          path: '/misrecetas',
          icon: <IoIcons.IoMdPeople />,
          cName: 'nav-text'
        },
        {
          title: 'Log out',
          path: '/logout',
          icon: <FaIcons.FaEnvelopeOpenText />,
          cName: 'nav-text'
        }
      ];
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);
  
    return (
      <>
        <IconContext.Provider value={{ color: '#000' }}>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  {/* <AiIcons.AiOutlineClose /> */}
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
  }
  
  export default Navbar;
  
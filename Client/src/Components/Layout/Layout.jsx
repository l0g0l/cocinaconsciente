import React from 'react'

import Encabezado from "../../Components/Layout/Encabezado/Encabezado"
import Footer from "../../Components/Layout/Footer/Footer"
import NavMenu from "../../Components/Layout/NavMenu/NavMenu"



const Layout = () => {
    return (
        <div>
            <Encabezado/>
            <NavMenu
                // navLinks = {navLinks}
                // logo={logo}
                />
            <Footer/>            
        </div>
    )
}

export default Layout

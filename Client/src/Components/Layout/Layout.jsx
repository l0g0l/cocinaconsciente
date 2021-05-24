import React from 'react'

import Encabezado from "../../Components/Layout/Encabezado/Encabezado"
import Footer from "../../Components/Layout/Footer/Footer"
// import NavMenu from "../../Components/Layout/NavMenu/NavMenu"
import NavMenuHamburg from "../../Components/Layout/NavMenu/NavMenuHamburg"




const Layout = () => {
    return (
        <div>
            <Encabezado/>
            {/* <NavMenu/> */}
            <NavMenuHamburg/>
            
            <Footer/>            
        </div>
    )
}

export default Layout

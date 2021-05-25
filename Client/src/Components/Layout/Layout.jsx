import React from 'react'

import Footer from "../../Components/Layout/Footer/Footer"
// import NavMenu from "../../Components/Layout/NavMenu/NavMenu"
import NavMenuHamburg from "../../Components/Layout/NavMenu/NavMenuHamburg"



const Layout = ({children}) => {
    return (
        <div>
             {/* <NavMenu/> */}
            <NavMenuHamburg/>
            <main>{children}</main>
            <Footer/>            
        </div>
    )
}

export default Layout

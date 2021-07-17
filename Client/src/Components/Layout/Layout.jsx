import React from 'react'

import Footer from "../../Components/Layout/Footer/Footer"
import NavMenuHamburg from "../../Components/Layout/NavMenu/NavMenuHamburg"



const Layout = ({ children }) => {
    return (
        <div>

            <NavMenuHamburg />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout

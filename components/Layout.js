import React from 'react'
import Nav from './Nav';
import Footer from './Footer';

import layStyles from "../styles/Layout.module.scss"

const Layout = ({children}) => {
    return (
        <div className={layStyles.main}>
            <Nav />
            <main>{children}</main>  
            <Footer />
        </div>
    )
}

export default Layout;

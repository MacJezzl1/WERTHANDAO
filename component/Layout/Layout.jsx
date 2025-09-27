import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Scrolltoparrow from './components/Scrolltoparrow/Scrolltoparrow'

function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
            <Scrolltoparrow />
        </div>
    )
}

export default Layout
import React from 'react'
import Header from "../../components/thecodersclub/header"
import Domain from '../../components/thecodersclub/domains'
import Footer from '../../components/thecodersclub/footer'

import '../../components/thecodersclub/thecodersclub.css'

export default function thecodersclub() {
    return (
        <div className="root">
            <Header />
            <Domain />
            <Footer />
            
        </div>
    )
}

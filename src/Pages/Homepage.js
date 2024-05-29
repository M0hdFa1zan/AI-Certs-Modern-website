import React from 'react'
import Header from '../Components/Header'
import Middlepage from '../Components/Middlepage'
import Examination from '../Components/Examination'
import Module from '../Components/Module'
import Learnpart from '../Components/Learnpart'
import Industry from '../Components/Industry'
import Footer from '../Components/Footer'

function Homepage() {
    return (
        <div className='homepage'>
            <Header />
            <Middlepage />
            <Examination />
            <Module />
            <Learnpart />
            <Industry />
            <Footer />
        </div>
    )
}

export default Homepage

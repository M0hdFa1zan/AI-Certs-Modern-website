import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <div className='navbar'>
            <div className='innav'>
                <div className='logo'><img src='../Assets/Logo.png' alt='' /></div>
                <div className='tabs'>
                    <div>Home</div>
                    <div>About</div>
                    <div className='three'>Certification</div>
                    <div>Authorized Partners</div>
                    <div>Authorized Trainers</div>
                    <div>Resources</div>
                    <div>Contact</div>
                </div>
                <div className='getbutton'>
                    <button>Get Certified</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar

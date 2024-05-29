import React from 'react'
import Navbar from './Navbar'
import "./Header.css"

function Header() {
    return (
        <div className='header'>
            <div className='navb'>
                <Navbar />
            </div>
            <div className='inhead'>
                <div className='aiarea'>
                    <div className='aitextarea'>
                        <div className='heading1'>AI<p>+</p></div>
                        <div className='heading2'>Executive<p>TM</p></div>
                        <div className='certno'>CERTIFICATION NUMBER: 1100ABCD</div>
                        <div className='aitext'>In this comprehensive program, designed for business leaders, candidates will gain the knowledge and insights needed to strategically leverage artificial intelligence within your organization. The candidates will explore real-world use cases, ethical considerations, and the latest AI trends which empowers them to make informed decisions and lead their organization into an era of AI-driven success.</div>
                        <div className='aibutton'><button className='button1'>Buy Now</button><button className='button2'>Download Blueprint</button></div>
                    </div>
                    <div className='aiimage'><img src='../Assets/certimg.png' /></div>
                </div>
                <div className='examarea'>
                    <div className='inexamarea'>
                        <div className='examtabs'>
                            <div>Prerequesites</div>
                            <div>Exam Details</div>
                            <div>Modules</div>
                            <div>Skills</div>
                            <div>Opportunities</div>
                        </div>
                    </div>
                    <div className='exambutton'><button>Buy Now</button></div>
                </div>
            </div>
        </div>
    )
}

export default Header

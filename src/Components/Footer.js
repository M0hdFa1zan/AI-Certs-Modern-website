import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className='infoot'>
                <div className='footup'>
                    <div className='footone'>
                        <div className='infootone'>
                            <div className='footimage'><img src='../Assets/footerlogo.png' /></div>
                            <div className='newsletter'>Newsletter Signup</div>
                            <div className='inputarea'>
                                <div className='inputimage'><img src='../Assets/envelope.png' /></div>
                                <div className='realinput'><input placeholder='Enter Your Email Address' /></div>
                                <div className='inputarrow'><img src='../Assets/arrow.png' /></div>
                            </div>
                            <div className='iconarea'>
                                <div><img src='../Assets/facebook.png' /></div>
                                <div><img src='../Assets/youtube.png' /></div>
                                <div><img src='../Assets/instagram.png' /></div>
                                <div><img src='../Assets/linkedin.png' /></div>
                                <div><img src='../Assets/twitter.png' /></div>
                            </div>
                        </div>
                    </div>
                    <div className='foottwo'>
                        <div className='foothead'>About</div>
                        <div className='footdetail'>
                            <div>Why AI Certs</div>
                            <div>Accreditation</div>
                            <div>Meet Our Team</div>
                            <div>Trademarks</div>
                            <div>Articles</div>
                            <div>Press Release</div>
                            <div>Testimonials</div>
                            <div>Career</div>
                            <div>Contact</div>
                        </div>
                    </div>
                    <div className='footthree'>
                        <div className='foothead'>Certifications</div>
                        <div className='footdetail'>
                            <div>AI+ Professional™</div>
                            <div>AI+ Technical™</div>
                            <div>Blockchain+ Professional™</div>
                            <div>Blockchain+ Technical™</div>
                            <div>View All</div>
                        </div>
                    </div>
                    <div className='footfour'>
                        <div className='foothead'>Authorized</div>
                        <div className='footdetail'>
                            <div>Authorized Partners</div>
                            <div>Authorized Trainers</div>
                        </div>
                    </div>
                </div>
                <div className='footdown'>
                    <div>Copyright © AI CERTs™, Inc. All Rights Reserved</div>
                </div>
            </div>
        </div>
    )
}

export default Footer

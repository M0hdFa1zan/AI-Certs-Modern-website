import React from 'react'
import "./Industry.css"

function Industry() {
    return (
        <div className='industry'>
            <div className='inindustry'>
                <div className='indushead'>Industry Opportunities after Course Completion</div>
                <div className='cardscart'>
                    <div className='indcards'>
                        <div className='indimage'><img src='../Assets/ind1.png' alt='' /></div>
                        <div className='indetail'>Executive</div>
                        <div className='indpara'>Below the title the description of a particular Job will be provided.</div>
                    </div>
                    <div className='indcards'>
                        <div className='indimage'><img src='../Assets/ind1.png' alt='' /></div>
                        <div className='indetail'>Data Analysis</div>
                        <div className='indpara'>Below the title the description of a particular Job will be provided.</div>
                    </div>
                    <div className='indcards'>
                        <div className='indimage'><img src='../Assets/ind1.png' alt='' /></div>
                        <div className='indetail'>Marketing Manager</div>
                        <div className='indpara'>Below the title the description of a particular Job will be provided.</div>
                    </div>
                </div>
                <div className='rounds'>
                    <div><img src='../Assets/round1.png' /></div>
                    <div><img src='../Assets/round.png' /></div>
                    <div><img src='../Assets/round.png' /></div>
                    <div><img src='../Assets/round.png' /></div>
                </div>
            </div>
        </div>
    )
}

export default Industry

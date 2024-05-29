import React from 'react'
import "./Learnpart.css"

function Learnpart() {
    return (
        <div className='learndetail'>
            <div className='inlearndetail'>
                <div className='learnhead'>What will you Learn ?</div>
                <div className='learncomp'>
                    <div className='learngrid'>
                        <div className='gridone '>
                            <div className='singlelearn'>
                                <div className='gridlogo'>
                                    <img src='../Assets/grid1.png' />
                                </div>
                                <div className='gridtext'>
                                    <div className='gridheading'>Data Analytics</div>
                                    <div className='griddetail'>Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Praesent et tortor eget tortodunt tristique.</div>
                                </div>
                            </div>
                            <div className='singlelearn'>
                                <div className='gridlogo'>
                                    <img src='../Assets/grid2.png' />
                                </div>
                                <div className='gridtext'>
                                    <div className='gridheading'>Machine Learning</div>
                                    <div className='griddetail'>In cursus urna dui, ac imperdiet augue sodales nec. Donec fermentum sapien cidunt eget.</div>
                                </div>
                            </div>
                        </div>

                        <div className='gridtwo'>
                            <div className='singlelearn'>
                                <div className='gridlogo'>
                                    <img src='../Assets/grid3.png' />
                                </div>
                                <div className='gridtext'>
                                    <div className='gridheading'>AI Technologies</div>
                                    <div className='griddetail'>Aliquam sed lorem cong ue, facilisis sem tempus, pre tium tortor. Nullam msit amet...</div>
                                </div>
                            </div>
                            <div className='singlelearn'>
                                <div className='gridlogo'>
                                    <img src='../Assets/grid4.png' />
                                </div>
                                <div className='gridtext'>
                                    <div className='gridheading'>Leadership</div>
                                    <div className='griddetail'>Donec posuere est etnulla suscipit varius. Integer id augue ultrices, congue dapibus...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='learnimg'><img src='../Assets/laptop.jpg' alt='' /></div>
                </div>
            </div>
        </div>
    )
}

export default Learnpart

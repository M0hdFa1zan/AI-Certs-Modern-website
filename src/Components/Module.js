import React from 'react'
import "./Module.css"

function Module() {
    return (
        <div className='module'>
            <div className='inmodule'>
                <div className='moduletext'>
                    <div className='modulehead'>Certification Modules</div>
                    <div className='moduledetail'>
                        <div className='minus'>
                            <div className='signs'><img src='../Assets/minus.png' /></div>
                            <div>
                                <div className='minusheading'>Module 1: Understanding Artificial Intelligence</div>
                                <div className='minuspara'>
                                    <div>1.1 Introduction to AI in Business</div>
                                    <div>1.2 Basic Concepts of AI</div>
                                    <div>1.3 History and Evolution of AI in Business</div>
                                    <div>1.4 Importance of AI in Modern Business Practices</div>
                                </div>
                            </div>
                        </div>
                        <div className='plus'><div className='signs'><img src='../Assets/plus.png' />
                        </div>Module 2: AI Technologies and Business Implications</div>
                        <div className='plus'><div className='signs'><img src='../Assets/plus.png' />
                        </div>Module 3: AI Strategy for Executives</div>
                        <div className='plus'><div className='signs'><img src='../Assets/plus.png' />
                        </div>Module 4: Ethical, Legal, and Societal Considerations</div>
                        <div className='plus'><div className='signs'><img src='../Assets/plus.png' />
                        </div>Module 5: Managing AI Projects</div>
                        <div className='plus'><div className='signs'><img src='../Assets/plus.png' />
                        </div>Module 6: AI and the Future of Work</div>
                        <div className='plus'><div className='signs'><img src='../Assets/plus.png' />
                        </div>Module 7: Department-Specific AI Applications</div>
                        <div className='plus last'><div className='signs'><img src='../Assets/plus.png' />
                        </div>Module 8: Interactive Workshop</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Module

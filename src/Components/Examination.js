import React from 'react'
import "./Examination.css"

function Examination() {
    return (
        <div className='examdetail'>
            <div className='inexamdetail'>
                <div className='detailhead'>Exam Details</div>
                <div className='examcomp'>
                    <div className='compimg'><img src='https://s3-alpha-sig.figma.com/img/0e0f/c742/7527239de81bee9a503e15cea90fb5a4?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nZX6Pc61mZqNRAAYrNc9TABJdusL6LII1hFqCOkkxJr05JpcAIxaVJmFTO0dwvJozM1NVMYk-4JKBV4J~TboBbBzxwUVzowOMdNCTdu1iOt7NVSBG2AdQ8QbJAxNKO1aTC7QvUAbnatijK3sMcbR3A0YU~ZxWswm3hLY9be~V6epM4FP~u0qAgFD-7SXyTt7vpQcHAJDhOaotDZZ9HJL1VVSSGYuqtdyess9J8KyDVUdUn8Ofyl1lsDX1xdMlezv4DRr-cjTXOaibQNVzFTbA0BCjfKsbZniryA55f50RSXNinuTUpSqruQHAvJHV0fzGZqz5VdyJLAEwv7phDRsSw__' alt='' /></div>
                    <div className='compgrid'>
                        <div className='grid1'>
                            <div className='singlecomp '>
                                <div className='singleone'>Module</div>
                                <div className='singletwo'>8</div>
                            </div>
                            <div className='singlecomp '>
                                <div className='singleone'>Examination</div>
                                <div className='singletwo'>2</div>
                            </div>
                        </div>
                        <div className='grid2'>
                            <div className='singlecomp'>
                                <div className='singleone'>50 MCQs</div>
                                <div className='singletwo'>90 Minutes</div>
                            </div>
                            <div className='singlecomp'>
                                <div className='singleone'>Passing Score</div>
                                <div className='singletwo'>70%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Examination

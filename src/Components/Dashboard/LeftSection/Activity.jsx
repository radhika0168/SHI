import React from 'react'
import './Activity.css';
const Activity = () => {
    return (
        <>
            <div className='activity-container'>
                <h3>Your's Acitivity :</h3>
                <div className='Like-posts'>

                    <div className='Like-post'>
                        <p className='about-activity'>You commented on a post <span>⨀ 1 day ago ⨀👥 </span></p>
                        <p className='activity'>Interested</p>
                        
                        👏👍20
                    </div>

                    <div className='Like-post'>
                        <p className='about-activity'>You Liked a post <span> ⨀ 7 day ago ⨀👥</span> </p>
                        <p className='activity'>Interested</p>
                        
                        👏👍20
                    </div>

                </div>
            </div>
        </>
    );
}

export default Activity
import React from 'react';
import './Dashboard.css';
import LeftSection from './LeftSection/LeftSection';
import RightSection from './RightSection/RightSection';

const Dashboard = () => {
    return (
        <>
            <div className='Dash-page'>
                {/* <NavSection /> */}
                {/* <div className='dash'> */}
                    <div className='Dashboard'>
                        <LeftSection />
                        {/* <MidSection /> */}
                        <RightSection />
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Dashboard
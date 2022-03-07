import React from 'react'
import NavSection from './NavSection';
import Activity from './Activity';
import About from './About';
import Experience from './Experience';
const LeftSection = () => {
  return (
     <div className='Leftcontainer'>
        <NavSection/>
        <About/>
        <Experience/>
        <Activity/>
     </div>
  )
}

export default LeftSection
import React from 'react'
import './RightSection.css'
import Skills from './Skills'
import Posts from './Posts'
import Events from './Events'
import Updates from './Updates'
const RightSection = () => {
  return (
    <>
        <div className='Right-container'>
            <Skills/>
            <Posts/>
            <Events/>
            <Updates/>
        </div>
    </>
  )
}

export default RightSection
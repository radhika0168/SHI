import React from 'react'
import './Skills.css';
import chart from '../.../../../../Assets/Image/chart.png';

const Skills = () => {
  return (
    <>
      <div className='Skill-container'>
        {/* <br/> */}
        <div className='Skills'>

          <div className='skills_list'>
            <h3>Expertise </h3>
            <ol>
              <li>C++</li>
              <li>C#</li>
              <li>Java</li>
              <li>python</li>
              <li>PPS</li>
              {/* <li>Web dev</li> */}
              <li>react</li>
            </ol>
          </div>

          <div className='Skillsgraph'>
            <img src={chart} className='chartimg' />
          </div>

        </div>

      </div>

    </>
  )
}

export default Skills
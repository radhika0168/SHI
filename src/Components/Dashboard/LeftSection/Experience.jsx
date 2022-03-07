import React,{useState} from 'react'
import './Experience.css'
import logo from '../../../Assets/Image/devtown.jpg'
import ExperienceModal from './ExperienceModal'
const Experience = () => {
    const [Open,SetOpen] = useState(false);
    return (
    <>
        <div className='experience-container'>
            <div className='Exp-title'>
                <h3>Experience</h3>
                <span onClick={()=>SetOpen(!Open)} className="Exp-button"><i class='far fa-edit'></i></span>
            </div>
            <div className='Experience'>
                <div>
                    <img src={logo} className='Logo'/>
                </div>
                <div className='exp-info'>
                    <h4>DSA HEAD</h4>
                    <p className='oranisation-name'>Trinity cyber forum ⨀Full time</p>
                    <p style={{'font-size': '13px'}}>Aug 2020 - Present 1yr 8month</p>
                    <p>Location</p>
                </div>

            </div>
            <div className='Experience'>
                <div>
                    <img src={logo} className='Logo'/>
                </div>
                <div className='exp-info'>
                    <h4>Web developer</h4>
                    <p className='oranisation-name'>Trinity cyber forum ⨀Full time</p>
                    <p style={{'font-size': '13px'}}>Aug 2020 - Present 1yr 8month</p>
                    <p>Location</p>
                </div>
            </div>
        </div>

        {Open && <ExperienceModal Open = {Open}/>}

    </>
  )
}

export default Experience
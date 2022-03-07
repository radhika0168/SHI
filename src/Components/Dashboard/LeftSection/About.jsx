import React,{useState} from 'react'
import './About.css'
import Aboutmodel from './Aboutmodel'
const About = () => {
    const [open,setopen] = useState(false);
    return (
        <>
            <div className='about-container'>

                <div className='about-heading'>
                    <h3>About</h3>
                    <span onClick={()=>{setopen(!open)}} ><i class='far fa-edit' ></i></span>
                </div>
                <br />
                <div className='about'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, omnis! In quos ab assumenda pariatur unde, et veritatis ipsam, sit ullam excepturi cumque explicabo rem eligendi velit laboriosam dolore nostrum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ad a explicabo, fugit facere eligendi! Amet blanditiis beatae eligendi numquam ullam vel culpa, porro expedita quod dolorum, distinctio laudantium maiores?</p>
                </div>
            </div>
            {open && <Aboutmodel open={open}/>}
        </>
        
    )
}

export default About
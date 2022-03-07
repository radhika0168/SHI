import React from 'react'
import './Updates.css';
const Updates = () => {
  return (
    <>
        <div className='post-container'>
            <h3 style={{color:'red'}}>Updates</h3>
            <div className='post-events'>
                <div className='post-event'>
                    <h4>Pradhan Mantri Yojna</h4>
                    <p>The Pradhan Mantri Rozgar Yojana or PMRY is a Central Government initiative that aims to provide self-employment opportunities to educated youths who are unemployed.</p>
                    <p>launched in 1993✔👤</p>
                </div>

                <div className='post-event'>
                    <h4>Working Women Hostel👨‍💻</h4>
                    <p> objective of the scheme is to promote availability of safe and conveniently located accommodation for working women</p>
                    <p>launched in 2003✔👤</p>
                </div>

                <div className='post-event'>
                    <h4>Women Helpline Scheme</h4>
                    <p> objective of the scheme is to promote availability of safe and conveniently located accommodation for working women</p>
                    <p>launched in 2001✔👤</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Updates;
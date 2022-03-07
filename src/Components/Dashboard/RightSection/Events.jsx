import React from 'react'
import './Events.css';
const Events = () => {
  return (
    <>
        <div className='event-container'>
            <h3>Upcoming Events</h3>
            <div className='events'>
                <div className='event'>
                    <h4>Robotech👨‍💻</h4>
                    <p>⨀Atal sabhagar Delhi⨀</p>
                    <p>7-1pm on 7 march✔👤</p>
                </div>

                <div className='event'>
                    <h4>Smart india Hackathon👨‍💻</h4>
                    <p>⨀Atal sabhagar Delhi⨀</p>
                    <p>7-8am on 7 march✔👤</p>
                </div>

                <div className='event'>
                    <h4>Girls script hackathon👨‍💻</h4>
                    <p>⨀Noth India ⨀</p>
                    <p>12-1pm on 7 march✔👤</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Events;
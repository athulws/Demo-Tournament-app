import React from 'react'
import '../Styles/Knockout.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Knockout = () => {
  return (
    <div>
      <div className="knockout-wrap">
        <Navbar/>
       <div className='container'>
         <div className='knock-out'>
              <div className="knockout_match">
                  <h1>Knockout Tournament of Football</h1>
              </div>
              <div className="knockout-view">
                  <div className="views-sec">
                      <Link to={''}><h5>OVERVIEW</h5></Link>
                      <Link to={''}><h5>FIXTURES & RESULTS</h5></Link>
                      <Link to={''}><h5>TEAMS</h5></Link>
                      <Link to={''}><h5>STATS</h5></Link>
                      <Link to={''}><h5>SCHEDULER</h5></Link>
                      <Link to={''}><h5>ADMIN</h5></Link>
                  </div>
                  <hr id='knockout-boarder'/>
              </div>
         </div>
       </div>
      </div>
    </div>
  )
}

export default Knockout

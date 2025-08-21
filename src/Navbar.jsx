import React from 'react'
import { Link } from 'react-router-dom'

import './App.css'

function Navbar() {
  return (
    <div className='container1'>
        <div>
            <Link to='/'>HOME</Link>
            
        </div>
        <div>
            <Link to='/Pets'>AVAILABLE PETS</Link>
            
        </div>
        <div>
            <Link to='/Process'> ADOPTION PROCESS</Link>
           
        </div>
        <div>
             <Link to='/Reveiw'>REVIEWS</Link>
            
        </div>
        <div>
            <Link to='/Adoptnow'>APPLY NOW</Link>
        </div>
    </div>
  )
}

export default Navbar
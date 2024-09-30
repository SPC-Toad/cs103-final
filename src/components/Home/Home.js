import React from 'react'
import "./Home.css"
import pepe from './pepe.jpg'
import pepe1 from './pepe-1.png'
import pepe2 from './pepe-2.png'

function Home() {
  return (
    <div id='home-container'>
      <div>
        We done with home page bitches
      </div>
        <div id='dice'>
            <img className='side' id='side-1' src={pepe} alt='no-image'/>
            <img className='side' id='side-2' src={pepe1} alt='no-image'/>
            <img className='side' id='side-3' src={pepe2} alt='no-image'/>
            <img className='side' id='side-4' src={pepe1} alt='no-image'/>
            <img className='side' id='side-5' src={pepe2} alt='no-image'/>
            <img className='side' id='side-6' src={pepe} alt='no-image'/>
        </div>
    </div>
  )
}

export default Home
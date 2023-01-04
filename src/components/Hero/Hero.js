import React from 'react'
import "./Heroin.css"
function Hero() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
        <img src={require("../../Images/heroin.jpg")} alt="heroinlogo" className='img-fluid heroin'/>
        </div>
        <div className='col-md-2'></div>
        </div>
    </div>
  )
}

export default Hero
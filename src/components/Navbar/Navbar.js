import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='nav'>
        <img src={require("../../Images/menuLogo.png")} style={{width:"20px",height:"20px"}} className="mt-3"/>
        <div id="logo">
    <a href="./index.html">
        <img src={require("../../Images/zelgryLogo.jpeg")} alt="zelgryLogo"/>
        </a>
    </div>
    
    <div>
    <a href="./search.html">
    <p id="search-input">SEARCH</p></a>
    </div>

    <div id="help">
    <a href="./login.html"/>
        <div >LOGIN</div>
        <a/>
        <a href="./zarahelp.html"/>
        <div>HELP</div>
        <a/>
        <a href="./zarahelp.html"/>
        <div>CART</div>
        <a/>
    </div>
        
    </div>
  )
}

export default Navbar
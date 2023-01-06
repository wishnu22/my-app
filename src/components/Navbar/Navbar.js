import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='nav'>
      <Link to="/menu">
    <img src={require("../../Images/menuLogo.png")} style={{width:"20px",height:"20px"}} className="mt-3"/>
    </Link>
    <div id="logo">
    <Link to="/">
    <img src={require("../../Images/zelgryLogo.jpeg")} alt="zelgryLogo"/>
    </Link>
</div>

<div>
<Link to="/Search">
<p id="search-input">SEARCH</p></Link>
</div>

<div id="help">
<Link to="/login">
    <div >LOGIN</div>
    </Link>
   <Link to="/help">
    <div>HELP</div>
    </Link>
    
   
    <Link to="/cart">
    <div>CART</div>
    </Link>
</div>
    
</div>

  )
}

export default Navbar
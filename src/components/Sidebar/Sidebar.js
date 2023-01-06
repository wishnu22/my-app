import React from 'react'
import {Link} from 'react-router-dom'
import "./Sidebar.css"
function Sidebar() {
  return (
    <div>
          <nav class="sidebar">
    <ul>
      <li>
        <Link to="/" class="womensec">women</Link>
        <ul class="womensec1">
          <li><Link to="/">STARTING FROM 40%</Link></li>
          <li id="womenJacks">JACKETS | PUFFERS</li>
          <li>
            <Link to="/">BLAZERS | COATS</Link>
            <ul>
              <li><Link to="/">DRESSES | JUMPSUITS</Link></li>
              <li><Link to="/">SHIRTS</Link></li>
              <li><Link to="/">TROUSERS</Link></li>
              <li><Link to="/">JEANS</Link></li>
              <li><Link to="/">T-SHIRTS</Link></li>
              <li><Link to="/">TOPS | BODYSUITS</Link></li>
              <li><Link to="/">SKIRTS | SHORTS</Link></li>
              <li><Link to="/">KNITWEAR</Link></li>
              <li><Link to="/">SHOES</Link></li>
              <li><Link to="/">BAGS</Link></li>
              <li id="womenAcc">ACCESSORIES</li>
            </ul>
          </li>
        </ul>
      </li>



      <li>
        <Link to="/" class="mensec">men</Link>
        <ul class="mensec1">
          <li><Link to="/">STARTING FROM -60%</Link></li>
          <li><Link to="/">STARTING FROM -40%</Link></li>
          <li>
            <Link to="/">JACKETS | COATS</Link>
            <ul>
              <li><Link to="/">OVERSHIRTS</Link></li>
              <li id="menShirts">SHIRTS</li>
              <li><Link to="/">T-SHIRTS | SWEATSHIRTS</Link></li>
              <li><Link to="/">TROUSERS | JEANS</Link></li>
              <li id="menShoes">SHOES</li>
              <li><Link to="/">BAGS | BACKPACKS</Link></li>
              <li><Link to="/">ACCESSORIES</Link></li>
              <li id="athleticz">ZELGRY ATHLETICS</li>
            </ul>
          </li>
        </ul>
      </li>




      <li><Link to="/">Kids</Link></li>
      <li><Link to="/">SHOES & BAGS</Link></li>
      <li><Link to="/">JOIN LIFE</Link></li>
      <br />
      <li><Link to="/">+ info</Link></li>
    </ul>
  </nav>
    </div>
  )
}

export default Sidebar
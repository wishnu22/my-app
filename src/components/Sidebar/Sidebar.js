import React from 'react'

function Sidebar() {
  return (
    <div>
          <nav class="sidebar">
    <ul>
      <li>
        <a href="#" class="womensec">women</a>
        <ul class="womensec1">
          <li><a href="#">STARTING FROM 40%</a></li>
          <li id="womenJacks">JACKETS | PUFFERS</li>
          <li>
            <a href="#">BLAZERS | COATS</a>
            <ul>
              <li><a href="#">DRESSES | JUMPSUITS</a></li>
              <li><a href="#">SHIRTS</a></li>
              <li><a href="#">TROUSERS</a></li>
              <li><a href="#">JEANS</a></li>
              <li><a href="#">T-SHIRTS</a></li>
              <li><a href="#">TOPS | BODYSUITS</a></li>
              <li><a href="#">SKIRTS | SHORTS</a></li>
              <li><a href="#">KNITWEAR</a></li>
              <li><a href="#">SHOES</a></li>
              <li><a href="#">BAGS</a></li>
              <li id="womenAcc">ACCESSORIES</li>
            </ul>
          </li>
        </ul>
      </li>



      <li>
        <a href="#" class="mensec">men</a>
        <ul class="mensec1">
          <li><a href="#">STARTING FROM -60%</a></li>
          <li><a href="#">STARTING FROM -40%</a></li>
          <li>
            <a href="#">JACKETS | COATS</a>
            <ul>
              <li><a href="#">OVERSHIRTS</a></li>
              <li id="menShirts">SHIRTS</li>
              <li><a href="#">T-SHIRTS | SWEATSHIRTS</a></li>
              <li><a href="#">TROUSERS | JEANS</a></li>
              <li id="menShoes">SHOES</li>
              <li><a href="#">BAGS | BACKPACKS</a></li>
              <li><a href="#">ACCESSORIES</a></li>
              <li id="athleticz">ZARA ATHLETICS</li>
            </ul>
          </li>
        </ul>
      </li>




      <li><a href="#">Kids</a></li>
      <li><a href="#">SHOES & BAGS</a></li>
      <li><a href="#">JOIN LIFE</a></li>
      <br />
      <li><a href="#">+ info</a></li>
    </ul>
  </nav>
    </div>
  )
}

export default Sidebar
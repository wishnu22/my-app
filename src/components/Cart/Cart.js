import React from 'react'
import "./Cart.css"
function Cart() {
  return (
    <div>
        {/* <!-- <div id="items">
        <p>YOUR BASKET IS EMPTY</p>
    </div> --> */}

    <div id="bag">
      <h3>SHOPPING BAG</h3>
      <p><span id="cartLen"> </span> ITEM</p>
    </div>
    <div id="items"></div>

    <div id="card">
      <div>
        <div id="price">TOTAL : <span id="total">0</span></div>
        <button onclick="proceed()">
          CONTINUE
        </button>
      </div>
    </div>
    </div>
  )
}

export default Cart
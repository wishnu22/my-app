import React from 'react'
import "./Cardpayment.css"
function Cardpayment() {
  return (
    <div>
        <div id="bottom">
      <h2>ENTER YOUR CARD DETAILS</h2>
      <img
        class="img"
        src="https://static.zara.net/static/images/payment/payment/icon-payment-visa.svg"
        alt=""
      />
      <form action="">
        <input type="text" placeholder="CARD NUMBER" />
        <input type="month" placeholder="MONTH" />
        <input type="number" placeholder="YEAR" /><br />
        <input type="text" placeholder="CARD HOLDER" />
        <input type="text" placeholder="CVV2 SECURITY CODE" />
      </form>
    </div>

    <div id="cards">
      <div id="pr">
        <div id="price">TOTAL : <span>2,290.00</span></div>
        <button onclick="window.location.href = 'summary.html' ">
          CONTINUE
        </button>
      </div>
    </div>
    </div>
  )
}

export default Cardpayment
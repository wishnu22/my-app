import React from 'react'
import "./Help.css"
function Help() {
  return (
    <div>
          <h2 class="d-flex p-2">HELP</h2>
      <div id="menu">
        <div onclick="goTozarashop()">
          <div>
            <img
              src="https://static.zara.net/photos///mkt/misc/help/icons//icon-80-help-bag.svg?ts=1550654368093"
              alt=""
            />
          </div>
          <p>SHOP AT ZARA.COM</p>
        </div>
        <div onclick="goToproduct()">
          <div>
            <img
              src="https://static.zara.net/photos///mkt/misc/help/icons//icon-80-help-product.svg?ts=1550654368093"
              alt=""
            />
          </div>
          <p>PRODUCT</p>
        </div>
        <div>
          <div>
            <img
              src="https://static.zara.net/photos///mkt/misc/help/icons//icon-80-help-payment.svg?ts=1550654368093"
              alt=""
            />
          </div>
          <p>PAYMENT</p>
        </div>
        <div>
          <div>
            <img
              src="https://static.zara.net/photos///mkt/misc/help/icons//icon-80-help-shipping.svg?ts=1550654368093"
              alt=""
            />
          </div>
          <p>SHIPPING</p>
        </div>
        <div>
          <div>
            <img
              src="https://static.zara.net/photos///mkt/misc/help/icons//icon-80-help-returns.svg?ts=1550654368093"
              alt=""
            />
          </div>

          <p>EXCHANGE AND</p>
          <p>RETURN</p>
        </div>
        <div>
          <div>
            <img
              src="https://static.zara.net/photos///mkt/misc/help/icons//icon-80-help-stores-and-company.svg?ts=1550654368093"
              alt=""
            />
          </div>
          <p>SHOP AND COMPANY</p>
        </div>
      </div>
      <div id="exchange">
        <div>
          <img
            src="https://static.zara.net/photos///mkt/misc/help/icons//icon-80-help-clothes-collection-info.svg?ts=1614071652367"
            alt=""
          />
        </div>
        <p>CLOTHES COLLECTION PROGRAM</p>
      </div>
    </div>
    
  )
}

export default Help
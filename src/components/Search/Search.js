import React from 'react'
import "./Search.css"
function Search() {
  return (
    <div>
         <div className="container">
      <div id="main">
        {/* <!-- search bar  --> */}
        <input
          type="text"
          name=""
          id="searchbar"
          placeholder="ENTER SEARCH TERMS"
        />

        {/* <!-- TREND products below Search bar  --> */}
        <div id="trending_product">
          <p>TRENDS</p>
          <p onclick="shirts(event)">SHIRT MEN</p>
          <p onclick="shoes(event)">SHOES</p>
          <p onclick="womenAcc(event)">WOMEN ACCESSORIES</p>
          <p onclick="womenjacket(event)">WOMEN JACKET</p>

        </div>
      </div>
      
    {/* <!-- all products html  --> */}
      <div id="searchProd" class="grid"></div>
      
      <div id="shirt-products" class="none grid">
    
      </div>
      <div id="shoes-products" class="none grid">

      </div>
      <div id="womenAccessories-products" class="none grid">

      </div>
      <div id="women-jacket" class="none grid">

      </div>
   
    </div>
    </div>
  )
}

export default Search
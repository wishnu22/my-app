import React from 'react'
import "./Personaldetails.css"
function Personaldetails() {
  return (
    <div className='container'>
        <div className='row'>
         <div id="logpage">
      <h3 className='mt-5'>PERSONAL DETAILS</h3>
      <div id="check">
        <div>
          <input id="checkmarkp" type="radio" name="personal" />Personal
        </div>
        <div><input id="checkmarkc" type="radio" name="personal" />Company</div>
      </div>

      <div id="fill">
        <form  onsubmit="signUp(event)">
          <input id="email" type="email" placeholder="EMAIL" required />
          <br />
          <input
            id="password"
            type="password"
            placeholder="PASSWORD"
            required
          />
          <input
            id="reapeatpassword"
            type="password"
            placeholder="REPEAT PASSWORD"
            required
          />
          <br />

          <input id="name" type="text" placeholder="NAME" required />
          <input id="pin" type="number" placeholder="PINCODE" required />
          <br />
          <input id="address" type="text" placeholder="ADDRESS" required />
          <input
            id="optional"
            type="text"
            placeholder="more info optional"
            required
          />
          <br />
          <input id="locality" type="text" placeholder="LOCALITY" required />
          <input id="city" type="text" placeholder="CITY" required />
          <br />
          <select id="state">
            <option value="">STATE</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadra and Nagar Haveli">
              Dadra and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Orissa">Orissa</option>
            <option value="Pondicherry">Pondicherry</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttaranchal">Uttaranchal</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="West Bengal">West Bengal</option>
            {`>`}
          </select>
          <input id="stateR" type="text" placeholder="REGN INDIA" required />

          <p className='psty'>PERFIX</p>

          <input id="mobile" type="number" placeholder="+91" required />
          <input id="tel" type="number" placeholder="TELEPHONE" required />

          <div id="checklast">
            <div id="fb">
              <input id="checkmark" type="checkbox" />I WISH TO RECEIVE ZELGRY
              NEWS ON MY E-MAIL
            </div>
            <div id="fb">
              <input id="checkmark1" type="checkbox" /> I ACCEPT THE PRIVACY
              STATEMENT
            </div>
          </div>
          <div id="bttn">
         <button type="submit">Create Account</button>
        </div>
          {/*  <div id="bttn">
            <button id="signUp()">
              <a href=""> CREATE ACCOUNT</a>
            </button>
          </div> */}
        </form>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Personaldetails
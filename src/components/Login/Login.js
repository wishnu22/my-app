import React from 'react'
import "./Login.css"
import "../Footer/Footer.css"
import "../Navbar/Navbar.css"
function Login() {
  return (
    <div>
       <div id="logindiv">
      <div id="log">
        <section>
          <h3>LOG IN</h3>
          <form id="form" onsubmit="login(event)">
            <div id="ep">
              <input
                type="email"
                id="inputEmail"
                onclick="clickForPass()"
                placeholder="email"
                required
              />
              <br />
              <input
                type="password"
                id="inputPasswd"
                placeholder="password"
                required
              />
            </div>
            <p class="size6">HAVE YOU FORGOTTEN YOUR PASSWORD?</p>

            {/* <button type="submit">LOG IN</button> */}
            <a href="">HAVE YOU FORGOTTEN YOUR
                        PASSWORD?</a>
            <div id="logbttn">
              <button  type="submit">LOG IN</button>
            </div>
          </form>
        </section>
      </div>
      <div id="reg">
        <section>
          <h3>REGISTER</h3>
          <div class="size">
            <p>
              IF YOU STILL DON'T HAVE A
              <span>
                <strong> zelgry.com</strong> "ACCOUNT, USE THIS OPTION TO ACCESS
                THE REGISTRATION FORM."
              </span>
            </p>
          </div>

          <div class="size">
            <p>
              BY GIVING US YOUR DETAILS, PURCHASING <b>ZELGRY</b>

              "WILL BE FASTER AND AN ENJOYABLE EXPERIENCE."
            </p>
          </div>

          <div id="bttn">
            <button><a href="./create-company.html"> CREATE ACCOUNT</a></button>
          </div>
        </section>
      </div>
    </div> 
    </div>
  )
}

export default Login
import React from 'react';
import"./sign.scss"
import { Link } from 'react-router-dom';


export default function sign() {
  return (
    <>
      {/* <!-- Start Navbar  --> */}
  <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-trans">
    <Link class="navbar-brand" to="/">Navbar</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        </ul>
        </div>
        
  </nav>
   <div className="signContainer">
    <div className="container">
    <div className="main">
    <input type="checkbox" id="chk" aria-hidden="true"/>
              {/* <!-- login --> */}
                <div class="login">
                    <form class="form">
                        <label for="chk" aria-hidden="true">Log in</label>
                        <input class="input" type="email" name="email" placeholder="Email" required=""/>
                        <input class="input" type="password" name="pswd" placeholder="Password" required=""/>
                        <button>Log in</button>
                    </form>
                </div>
                {/* <!-- register --> */}
          <div class="register">
                    <form class="form">
                        <label for="chk" aria-hidden="true">Register</label>
                        <input class="input" type="text" name="txt" placeholder="Username" required=""/>
                        <input class="input" type="email" name="email" placeholder="Email" required=""/>
                        <input class="input" type="password" name="pswd" placeholder="Password" required=""/>
                        <button>Register</button>
                    </form>
                </div>
    </div>
    </div>
   </div>
    
    </>
  )
}

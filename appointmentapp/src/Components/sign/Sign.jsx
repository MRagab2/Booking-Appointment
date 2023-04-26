import React from 'react';
import"./sign.scss"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function  Sign() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function login(ev){
    ev.preventDefault();
    axios.post('/login', {
      email,
      password
    }).then(response => {
      console.log(response);
      navigate('/');
    }).catch(error => {
      alert(error);
    });
    
  };

  const [nameAdd, setNameAdd] = useState('');
  const [emailAdd, setEmailAdd] = useState('');
  const [phoneAdd, setPhoneAdd] = useState('');
  const [passwordAdd, setPasswordAdd] = useState('');
  
  async function regiter(ev){
    ev.preventDefault();
    axios.post('/register', {
      fullName: nameAdd,
      email: emailAdd,
      phone: phoneAdd,
      password: passwordAdd
    }).then(response => {
      console.log(response);
      navigate('/');
    }).catch(error => {
      alert(error);
    });
    
  };
  return (
    <>
      {/* <!-- Start Navbar  --> */}
  <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-trans">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
        </li>
      </ul>
    </div>
        
  </nav>
    <div className="signContainer">
      <div className="container">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true"/>
                  {/* <!-- login --> */}
          <div className="login">
              <form className="form" onSubmit={login}>
                  <label for="chk" aria-hidden="true">Log in</label>
                  <input className="input" 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required
                        value={email}
                        onChange={ev =>setEmail(ev.target.value)}/>
                  <input className="input" 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        required
                        minLength="8"
                        value={password}
                        onChange={ev =>setPassword(ev.target.value)}/>
                  <button type='submit'>Log in</button>
              </form>
          </div>
                  {/* <!-- register --> */}
          <div className="register">
            <form className="form" onSubmit={regiter}>
                <label for="chk" aria-hidden="true">Register</label>
                <input className="input" 
                      type="text" 
                      name="nameAdd" 
                      placeholder="Username" 
                      required
                      value={nameAdd}
                      onChange={ev =>setNameAdd(ev.target.value)}/>
                <input className="input" 
                      type="email" 
                      name="emailAdd" 
                      placeholder="Email" 
                      required
                      value={emailAdd}
                      onChange={ev =>setEmailAdd(ev.target.value)}/>
                <input className="input" 
                      type="password" 
                      name="passwordAdd" 
                      placeholder="Password" 
                      required
                      minLength="8"
                      value={passwordAdd}
                      onChange={ev =>setPasswordAdd(ev.target.value)}/>
                <input className="input" 
                      type="text" 
                      name="phoneAdd" 
                      placeholder="Phone No." 
                      required
                      minLength="11"
                      value={phoneAdd}
                      onChange={ev =>setPhoneAdd(ev.target.value)}/>
                <button type='submit'>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

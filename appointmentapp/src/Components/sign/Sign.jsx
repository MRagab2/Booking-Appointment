import React from 'react';
import"./sign.scss"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setLocalUser, removeLocalUser } from '../../helpers/Storage';


export default function Sign() {
  const navigate = useNavigate();
  removeLocalUser();
  const [loginInfo, setLoginInfo] = useState({
    err: null,
    email:'',
    password:''
  });
  
   function login(ev){
    ev.preventDefault();
    setLoginInfo({...loginInfo, loading:true});
    axios.post('/login', {
      email: loginInfo.email,
      password: loginInfo.password
    }).then((response) => {
      setLoginInfo({
        ...loginInfo, 
        loading:false
      });
      console.log(response.data);
      setLocalUser(response.data);
      navigate('/');
    }).catch(error => {
      setLoginInfo({
        ...loginInfo, 
        loading:false, 
        err:error.response.data
      });
      alert(error);
    });
  };

  const [registerInfo, setRegisterInfo] = useState({
    err: null,
    fullName: '',
    email:'',
    password:'',
    passwordConfirm:'',
    phone: ''
  });
  
   function regiter(ev){
    ev.preventDefault();
    setRegisterInfo({...registerInfo, loading:true});
    axios.post('/register', {
      fullName: registerInfo.fullName,
      email: registerInfo.email,
      phone: registerInfo.phone,
      password: registerInfo.password,
      passwordConfirm: registerInfo.passwordConfirm
    }).then(response => {
      setRegisterInfo({...loginInfo, loading:false});
      setLocalUser(response.data);
      navigate('/');
    }).catch(error => {
      setRegisterInfo({...loginInfo, loading:false, err:error.response.data});
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
          {/* EDIT 
            ERRORS MSGS
            */}
                  {/* <!-- login --> */}
          <div className="login">
              <form className="form" onSubmit={login}>
                  <label for="chk" aria-hidden="true">Log in</label>
                  <input className="input" 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required
                        value={loginInfo.email}
                        onChange={ev =>setLoginInfo({...loginInfo, email: ev.target.value})}/>
                  <input className="input" 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        required
                        minLength="8"
                        value={loginInfo.password}
                        onChange={ev =>setLoginInfo({...loginInfo, password: ev.target.value})}/>
                        
                  <button type='submit' disabled={loginInfo.loading} >Log in</button>
              </form>
          </div>
                  {/* <!-- register --> */}
          <div className="register">
            <form className="form" onSubmit={regiter}>
                <label for="chk" aria-hidden="true">Register</label>
                <input className="input" 
                      type="text" 
                      name="name" 
                      placeholder="Username" 
                      required
                      value={registerInfo.fullName}
                      onChange={ev =>setRegisterInfo({...registerInfo, fullName: ev.target.value})}/>
                <input className="input" 
                      type="email" 
                      name="email" 
                      placeholder="Email" 
                      required
                      value={registerInfo.email}
                      onChange={ev =>setRegisterInfo({...registerInfo, email: ev.target.value})}/>
                <input className="input" 
                      type="password" 
                      name="password" 
                      placeholder="Password" 
                      required
                      minLength="8"
                      value={registerInfo.password}
                      onChange={ev =>setRegisterInfo({...registerInfo, password: ev.target.value})}/>
                <input className="input" 
                      type="password" 
                      name="password confirmation" 
                      placeholder="Password Confirmation" 
                      required
                      minLength="8"
                      value={registerInfo.passwordConfirm}
                      onChange={ev =>setRegisterInfo({...registerInfo, passwordConfirm: ev.target.value})}/>
                <input className="input" 
                      type="text" 
                      name="phone" 
                      placeholder="Phone No." 
                      required
                      minLength="11"
                      value={registerInfo.phone}
                      onChange={ev =>setRegisterInfo({...registerInfo, phone: ev.target.value})}/>

                <button type='submit' disabled={registerInfo.loading} >Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

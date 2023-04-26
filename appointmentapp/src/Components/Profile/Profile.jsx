import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Profile.scss";
import ProfileImg from"./avatar-1.jpg"
import axios from 'axios';

export default function Profile() {
  const [data, setData] = useState({
    loading: true, 
    err: null,
    result:null
  });
  useEffect(()=>{
    setData({...data, loading: true});
    axios.post('/user/email',{
      email: "admin@admin.com"
    })
      .then(async response =>{
        console.log(response);
        await setData({ ...data, result: response.data, loading: false, err: null})
      } )
      .catch(error => {
        setData({ ...data, loading: false, err:error})
        console.log(error)
        });
  },[]);
  return (
    <>
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
    <div className="profile">
      {data.loading === true && (
        <div>
          {/* EDIT
            LOADING....(spinner)
           */}
        </div>
      )}
      {data.loading === false && data.err == null && (
      <div className="wrapper">
        <div className="left">
            <img src={ProfileImg} alt="user" width="100"/>
            <h4>{data.result.user.fullName}</h4>
        </div>
        <div className="right">
          <div className="info">
            <h3>Information</h3>
            <div className="info_data">
              <div className="data">
                <h4>Email</h4>
                <p>{data.result.user.email}</p>
              </div>
              <div className="data">
                <h4>Phone</h4>
                  <p>{data.result.user.phone}</p>
              </div>
            </div>
          </div>
          
          <div className="projects">
            <Link to="edit">Edit Your Profile</Link>
          </div>
          
          <div className="social_media">
            <ul>
              <li><a href="/#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="/#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="/#"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      )}
      {data.loading === false && data.err != null && (
      <div>
        {/* EDIT      //data.err
            Error....
           */}
      </div>
      )}
    </div>
    </>
  )
}

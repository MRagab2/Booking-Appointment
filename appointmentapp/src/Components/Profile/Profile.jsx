import React from 'react'
import { Link } from 'react-router-dom'
import "./Profile.scss";
import ProfileImg from"./avatar-1.jpg"

export default function Profile() {
  return (
    <>
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
  <div className="profile">
  <div class="wrapper">
        <div class="left">
            <img src={ProfileImg} alt="user" width="100"/>
            <h4>Alex William</h4>
        </div>
        <div class="right">
            <div class="info">
                <h3>Information</h3>
                <div class="info_data">
                     <div class="data">
                        <h4>Email</h4>
                        <p>alex@gmail.com</p>
                     </div>
                     <div class="data">
                       <h4>Phone</h4>
                        <p>0001-213-998761</p>
                  </div>
                </div>
            </div>
          
          <div class="projects">
                <Link to="edit">Edit Your Profile</Link>
            </div>
          
            <div class="social_media">
                <ul>
                  <li><a href="/#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="/#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="/#"><i class="fab fa-instagram"></i></a></li>
              </ul>
          </div>
        </div>
    </div>
  </div>
    </>
  )
}

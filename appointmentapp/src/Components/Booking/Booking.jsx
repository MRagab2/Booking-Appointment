import React from 'react'
import { Link } from 'react-router-dom'


export default function Booking() {
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
  <div className="booking">
  <div class="container">
      <div class="bookContainer">
        {/* <!-- Book an Appointment  --> */}
        <div class="booking">
          <h3>Book Your Appointment Now!</h3>
          <form>
            <h5>Select The Date :</h5>
            <input
              type="date"
              class="form-control form-control-md"
              name="date"
              required
            />
            <h5>Select The Time :</h5>
            <select name="time" class="form-control form-control-md">
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
              <option value="13:00">13:00</option>
              <option value="13:30">13:30</option>
              <option value="14:00">14:00</option>
              <option value="14:30">14:30</option>
              <option value="15:00">15:00</option>
              <option value="15:30">15:30</option>
              <option value="16:00">16:00</option>
              <option value="16:30">16:30</option>
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="18:00">18:00</option>
              <option value="18:30">18:30</option>
            </select>
            <div class="select"></div>
          </form>
        </div>
        {/* <!-- Notes  --> */}
        <div class="notes">
          <div class="alert alert-success note" role="alert">
            <div class="imgAndUser">
              <img
                src="../assets/imgs/userImg.jpg"
                class="noteImgUser"
                alt=""
              />
              <h6>Abdallah Muhammed</h6>
            </div>
            <p>Booked an Appointment From 10:00 to 12:00</p>
          </div>
          <div class="alert alert-success note" role="alert">
            <div class="imgAndUser">
              <img
                src="../assets/imgs/userImg.jpg"
                class="noteImgUser"
                alt=""
              />
              <h6>Abdallah Muhammed</h6>
            </div>
            <p>Booked an Appointment From 10:00 to 12:00</p>
          </div>
          <div class="alert alert-danger note" role="alert">
            <div class="imgAndUser">
              <img
                src="../assets/imgs/userImg.jpg"
                class="noteImgUser"
                alt=""
              />
              <h6>Abdallah Muhammed</h6>
            </div>
            <p>Canceld the Appointment From 10:00 to 12:00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

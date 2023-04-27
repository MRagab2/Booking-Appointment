import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getLocalUser } from '../../helpers/Storage';


export default function Booking() {
  const navigate = useNavigate();
  const localUser = getLocalUser();
  if(!localUser.token)
    navigate('/');

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
  <div className="booking">
  <div className="container">
      <div className="bookContainer">
        {/* <!-- Book an Appointment  --> */}
        <div className="booking">
          <h3>Book Your Appointment Now!</h3>
          <form>
            <h5>Select The Date :</h5>
            <input
              type="date"
              className="form-control form-control-md"
              name="date"
              required
            />
            <h5>Select The Time :</h5>
            <select name="time" className="form-control form-control-md">
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
            <div className="select"></div>
          </form>
        </div>
        {/* <!-- Notes  --> */}
        <div className="notes">
          <div className="alert alert-success note" role="alert">
            <div className="imgAndUser">
              <img
                src="../assets/imgs/userImg.jpg"
                className="noteImgUser"
                alt=""
              />
              <h6>Abdallah Muhammed</h6>
            </div>
            <p>Booked an Appointment From 10:00 to 12:00</p>
          </div>
          <div className="alert alert-success note" role="alert">
            <div className="imgAndUser">
              <img
                src="../assets/imgs/userImg.jpg"
                className="noteImgUser"
                alt=""
              />
              <h6>Abdallah Muhammed</h6>
            </div>
            <p>Booked an Appointment From 10:00 to 12:00</p>
          </div>
          <div className="alert alert-danger note" role="alert">
            <div className="imgAndUser">
              <img
                src="../assets/imgs/userImg.jpg"
                className="noteImgUser"
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

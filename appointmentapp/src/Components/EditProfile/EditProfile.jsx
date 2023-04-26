import React from 'react'
import EditProfileImg from"./avatar-3.jpg"
import { Link } from 'react-router-dom'


export default function EditProfile() {
  return (
    <>
    <div className="editProfile">
    <div className="container-xl px-4 mt-4">
        {/* <!-- Account page navigation--> */}
        <nav className="nav nav-borders">
            <Link className="nav-link active" to="/"> Back To Home</Link>
            <Link className="nav-link active" to="/profile" > Back To Profile</Link>
        </nav>
        <hr className="mt-0 mb-4"/>
        <div className="row">
            <div className="col-xl-4">
                {/* <!-- Profile picture card--> */}
                <div className="card mb-4 mb-xl-0">
                    <div className="card-header">Profile Picture</div>
                    <div className="card-body text-center">
                        {/* <!-- Profile picture image--> */}
                        <img className="img-account-profile rounded-circle mb-2" src={EditProfileImg} alt=""/>
                        {/* <!-- Profile picture help block--> */}
                        <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                        {/* <!-- Profile picture upload button--> */}
                        <button className="btn btn-primary" type="button">Upload new image</button>
                    </div>
                </div>
            </div>
            <div className="col-xl-8">
                {/* <!-- Account details card--> */}
                <div className="card mb-4">
                    <div className="card-header">Account Details</div>
                    <div className="card-body">
                        <form>
                            {/* <!-- Form Group (username)--> */}
                            <div className="mb-3">
                                <label className="small mb-1" for="inputUsername">Username </label>
                                <input className="form-control" id="inputUsername" type="text" placeholder="Enter your username" value="username"/>
                            </div>
                            {/* <!-- Form Row--> */}
                            <div className="row gx-3 mb-3">
                                {/* <!-- Form Group (first name)--> */}
                                <div className="col-md-6">
                                    <label className="small mb-1" for="inputFirstName">First name</label>
                                    <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value="Valerie"/>
                                </div>
                                {/* <!-- Form Group (last name)--> */}
                                <div className="col-md-6">
                                    <label className="small mb-1" for="inputLastName">Last name</label>
                                    <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value="Luna"/>
                                </div>
                            </div>
                            {/* <!-- Form Row        --> */}
                            <div className="row gx-3 mb-3">
                                {/* <!-- Form Group (location)--> */}
                               
                            </div>
                            {/* <!-- Form Group (email address)--> */}
                            <div className="mb-3">
                                <label className="small mb-1" for="inputEmailAddress">Email address</label>
                                <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="name@example.com"/>
                            </div>
                            {/* <!-- Form Row--> */}
                            <div className="row gx-3 mb-3">
                                {/* <!-- Form Group (phone number)--> */}
                                <div className="col-md-6">
                                    <label className="small mb-1" for="inputPhone">Phone number</label>
                                    <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value=""/>
                                </div>
                                {/* <!-- Form Group (birthday)--> */}
                            </div>
                            {/* <!-- Save changes button--> */}
                            <button className="btn btn-primary" type="button">Save changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
    </>
  )
}

import React from 'react'
import EditProfileImg from"./avatar-3.jpg"
import { Link } from 'react-router-dom'


export default function EditProfile() {
  return (
    <>
    <div className="editProfile">
    <div class="container-xl px-4 mt-4">
        {/* <!-- Account page navigation--> */}
        <nav class="nav nav-borders">
            <Link class="nav-link active" to="/"> Back To Home</Link>
            <Link class="nav-link active" to="/profile" > Back To Profile</Link>
        </nav>
        <hr class="mt-0 mb-4"/>
        <div class="row">
            <div class="col-xl-4">
                {/* <!-- Profile picture card--> */}
                <div class="card mb-4 mb-xl-0">
                    <div class="card-header">Profile Picture</div>
                    <div class="card-body text-center">
                        {/* <!-- Profile picture image--> */}
                        <img class="img-account-profile rounded-circle mb-2" src={EditProfileImg} alt=""/>
                        {/* <!-- Profile picture help block--> */}
                        <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                        {/* <!-- Profile picture upload button--> */}
                        <button class="btn btn-primary" type="button">Upload new image</button>
                    </div>
                </div>
            </div>
            <div class="col-xl-8">
                {/* <!-- Account details card--> */}
                <div class="card mb-4">
                    <div class="card-header">Account Details</div>
                    <div class="card-body">
                        <form>
                            {/* <!-- Form Group (username)--> */}
                            <div class="mb-3">
                                <label class="small mb-1" for="inputUsername">Username </label>
                                <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" value="username"/>
                            </div>
                            {/* <!-- Form Row--> */}
                            <div class="row gx-3 mb-3">
                                {/* <!-- Form Group (first name)--> */}
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputFirstName">First name</label>
                                    <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value="Valerie"/>
                                </div>
                                {/* <!-- Form Group (last name)--> */}
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputLastName">Last name</label>
                                    <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value="Luna"/>
                                </div>
                            </div>
                            {/* <!-- Form Row        --> */}
                            <div class="row gx-3 mb-3">
                                {/* <!-- Form Group (location)--> */}
                               
                            </div>
                            {/* <!-- Form Group (email address)--> */}
                            <div class="mb-3">
                                <label class="small mb-1" for="inputEmailAddress">Email address</label>
                                <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="name@example.com"/>
                            </div>
                            {/* <!-- Form Row--> */}
                            <div class="row gx-3 mb-3">
                                {/* <!-- Form Group (phone number)--> */}
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputPhone">Phone number</label>
                                    <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value=""/>
                                </div>
                                {/* <!-- Form Group (birthday)--> */}
                            </div>
                            {/* <!-- Save changes button--> */}
                            <button class="btn btn-primary" type="button">Save changes</button>
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

import React, { useEffect, useState } from 'react'
import EditProfileImg from"./avatar-3.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { getLocalUser} from '../../helpers/Storage';
import axios from 'axios';


export default function EditProfile() {
    const navigate = useNavigate();
    const localUser = getLocalUser();
    if(!localUser.token)
      navigate('/');

    const [data, setData] = useState({
        fullName: '',
        phone: '',
        avatar: '',
        loading: true, 
        err: null,
    });

    useEffect(()=>{
    setData({...data, loading: true});
    axios.post('/user/email',{
        email: localUser.email
    },{
        headers:{
          email: localUser.email,
          authToken: localUser.token
        }
      }).then( response =>{
        console.log(response);
        setData({ ...data,
            fullName: response.data.user.fullName,
            phone: response.data.user.phone,
            avatar: response.data.user.avatar,

            loading: false, 
            err: null});
    }).catch(error => {
        setData({ ...data, loading: false, err:error})
        console.log(error)
        });
    },[]);

    
    function update(ev){
        ev.preventDefault();
        setData({...data, loading:true});
        axios.put('/user/email', {
            email: localUser.email,
            fullName: data.fullName,
            password: data.password,
            passwordConfirm: data.passwordConfirm,
            phone: data.phone
        }).then((response) => {
          setData({...data, loading:false});
          navigate('/profile');
        }).catch(error => {
          setData({...data, loading:false, err:error.response.data});
          alert(error);
        });
      };
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
            {data.loading === true && (
            <div>
            {/* EDIT
                LOADING....(spinner)
            */}
            </div>
        )}
        {data.loading === false && data.err == null && (
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
                        <div className="card-header font-italic text-muted">{localUser.email}</div>
                        <div className="card-body">
                            <form onSubmit={update}>
                                {/* <!-- Form Group (username)--> */}
                                <div className="mb-3">
                                    <label className="small mb-1" for="inputUsername">Name </label>
                                    <input className="form-control" 
                                            id="inputUsername" 
                                            type="text" 
                                            placeholder="Enter your username" 
                                            value={data.fullName}
                                            onChange={ev =>setData({...data, fullName: ev.target.value})}
                                    />

                                </div>
                                {/* <!-- Form Row--> */}
                                <div className="row gx-3 mb-3">
                                    {/* <!-- Form Group (first name)--> */}
                                    <div className="col-md-6">
                                        <label className="small mb-1" for="inputFirstName">New Password</label>
                                        <input className="form-control" 
                                                id="password"
                                                type="password" 
                                                placeholder="Password" 
                                                minLength="8"
                                                value={data.password}
                                                onChange={ev =>setData({...data, password: ev.target.value})}
                                        />
                                    </div>
                                    {/* <!-- Form Group (last name)--> */}
                                    <div className="col-md-6">
                                        <label className="small mb-1" for="inputLastName">Confirm Password</label>
                                        <input className="form-control" 
                                                id="passwordConfirm" 
                                                type="password" 
                                                placeholder="password Confirmation" 
                                                minLength="8"
                                                value={data.passwordConfirm}
                                                onChange={ev =>setData({...data, passwordConfirm: ev.target.value})}
                                        />
                                    </div>
                                </div>
                                {/* <!-- Form Row        --> */}
                                <div className="row gx-3 mb-3">
                                    {/* <!-- Form Group (location)--> */}
                                
                                </div>
                                {/* <!-- Form Row--> */}
                                <div className="row gx-3 mb-3">
                                    {/* <!-- Form Group (phone number)--> */}
                                    <div className="col-md-6">
                                        <label className="small mb-1" for="inputPhone">Phone number</label>
                                        <input className="form-control" 
                                                id="phone" 
                                                type="tel" 
                                                placeholder="Enter your phone number" 
                                                value={data.phone}
                                                onChange={ev =>setData({...data, phone: ev.target.value})}
                                        />
                                    </div>
                                    {/* <!-- Form Group (birthday)--> */}
                                </div>
                                {/* <!-- Save changes button--> */}
                                <button className="btn btn-primary" type="submit">Save changes</button>
                            </form>
                        </div>
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
    </div>
    </>
)}


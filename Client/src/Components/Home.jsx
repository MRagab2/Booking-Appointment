import React, { useEffect, useState } from 'react'
import HeaderImg from"../onilne courser.jpg"
import AboutImg from"../teacher photo.png"
import { Link } from 'react-router-dom'
import { getLocalUser } from '../helpers/Storage';
import axios from 'axios';


export default function Home() {

    const localUser = getLocalUser();
    let loggedEmail = '';
    let loggedToken = '';

    if(localUser){
        loggedEmail = localUser.email;
        loggedToken = localUser.token;
    }

    const [announces, setAnnounces] = useState({
        loading: true, 
        err: null,
        result:[]
      });

    useEffect(()=>{
        setAnnounces({...announces, loading: true});

        axios.get('/announcement',{
            headers: {
                email: loggedEmail,
                authToken: loggedToken
            }
        }).then(response =>{
            console.log(response);
            setAnnounces({ 
                ...announces, 
                result: response.data, 
                loading: false, 
                err: null})
        }).catch(error => {
            setAnnounces({ 
                ...announces, 
                loading: false, 
                err:error})
            console.log(error)
        });
    },[]);
  return (
    <>
    {/*  Start Navbar      */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              <a className="nav-link" href="#about">About</a>
              <a className="nav-link" href="#service">Service</a>
              <a className="nav-link" href="#testmonial">Testmonial</a>
              <a className="nav-link" href="#blog">Anoucment</a>
              {localUser && (
                <>
              <Link className="nav-link" to="profile">Profile</Link>
              <Link className="nav-link" to="booking">Book Now</Link>
                <Link className="nav-link " to='sign'>Log Out</Link>
                </>
              )}
              {!localUser && (
                <>
                <Link className="nav-link" to="sign">Book Now</Link>
                <Link className="nav-link " to='sign'>Sign In/Up</Link>
                </>
              )}
              
            </div>
          </div>
        </div>
      </nav>
       {/*  End Navbar      */}
       {/* START HEADER  */}
       <header className="header" id="home">
        <div className="container">
            <div className="infos">
                <h6 className="subtitle">Hello,I'm</h6>
                <h6 className="title">Mr Omara</h6>
                <p>Mern Developer</p>
                <div className="buttons pt-3">
                    <button className="btn btn-dark rounded">DOWNLOAD CV</button>
                </div>      

                <div className="socials mt-4">
                    <a className="social-item" href="/#"><i className="ti-facebook"></i></a>
                    <a className="social-item" href="/#"><i className="ti-twitter"></i></a>
                </div>
            </div>              
            <div className="img-holder">
                <img src={HeaderImg} alt=""/>
            </div>      
        </div>  

        <div className="widget">
            <div className="widget-item">
                <h2>124</h2>
                <p>Happy Clients</p>
            </div>
            <div className="widget-item">
                <h2>124</h2>
                <p>Certificate out</p>
            </div>
        </div>
    </header>
           {/* END HEADER  */}
           {/* About section  */}
    <section id="about" className="section mt-3">
        <div className="container mt-5">
            <div className="row text-center text-md-left">
                <div className="col-md-3">
                    <img src={AboutImg} alt="" className="img-thumbnail mb-4"/>
                </div>
                <div className="pl-md-4 col-md-9">
                    <h6 className="title">Mr Omara</h6>
                    <p className="subtitle">Mern Developerr</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, pariatur, aperiam aut autem voluptas odit. Odio ducimus delectus totam sed aliquam sequi praesentium mollitia, illum repudiandae quidem quod, magni magnam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, eius, nam. Quo praesentium qui temporibus voluptatum, facilis aliquid eligendi fugiat beatae neque inventore non. Laborum repellendus consequatur ullam voluptatum asperiores.</p>
                    <button className="btn btn-primary rounded mt-3">DOWNLOAD CV</button>                   
                </div>
            </div>
        </div>
    </section>
               {/*  END About section  */}


               
               {/* <!-- Service section --> */}
    <section id="service" className="section">
        <div className="container text-center">
            <h6 className="subtitle">Service</h6>
            <h6 className="section-title mb-4">What I Do</h6>
            <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br/> rerum commodi corrupti, temporibus non quam.</p>

            
        </div>
    </section>
    {/* <!-- End of Service --> */}



    {/* <!-- Skills section --> */}
    <section className="section">
        <div className="container text-center">
            <h6 className="subtitle">Skills</h6>
            <h6 className="section-title mb-4">Why Choose me</h6>
            <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br/> rerum commodi corrupti, temporibus non quam.</p>
            </div>
      </section>
    {/* <!-- End of Skils section --> */}

    {/* <!-- Blog Section --> */}
    <section id="blog" className="section">
        <div className="container text-center">
            <h6 className="section-title mb-4">Latest Announcements</h6>
            <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br/> rerum commodi corrupti, temporibus non quam.</p>

            <div className="row text-left">
                {announces.loading && (
                    <>load
                    {/* EDIT
                    SPINNER
                     */}
                    </>
                )}
                {announces.result.length !== 0 && !announces.loading && (
                    <>
                    {announces.result.map(announce => (
                    <div className="col-md-4" key={announce._id}>
                        <div className="card border mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{announce.title}</h5>
                                <div className="post-details">
                                    <div className='text-muted font-italic text-decoration-underline'>{announce.createdAt}</div>
                                    
                                </div>
                                {/* EDIT
                                    - *See more Announces...*
                                    - *See more content...*
                                */}
                                <p>{announce.content}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                    </>
                )}
                {announces.result.length === 0 && (
                    <>empty
                    {/* EDIT
                    Empty msg
                */}
                    </>
                
                )}
            </div>
        </div>
    </section>
        {/* <!--  End Blog Section --> */}
        {/* <!-- Page Footer --> */}
    <footer className="page-footer">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-sm-6">
                    <p>Copyright <script>document.write(new Date().getFullYear())</script> &copy; <a href="http://www.devcrud.com" target="_blank">DevCRUD</a></p>
                </div>
                <div className="col-sm-6">
                    <div className="socials">
                        <a className="social-item" href="/#"><i className="ti-facebook"></i></a>
                        <a className="social-item" href="/#"><i className="ti-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer> 
    {/* <!-- End of page footer --> */}
    </>
  )
}

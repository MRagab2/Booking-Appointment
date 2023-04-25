import React from 'react'
import HeaderImg from"../onilne courser.jpg"
import AboutImg from"../teacher photo.png"
import { Link } from 'react-router-dom'


export default function Home() {
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
              <Link className="nav-link" to="profile">Profile</Link>
              <Link className="nav-link" to="booking">Book Now</Link>
              <Link className="nav-link " to='sign'>Sign In/Up</Link>
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
            <h6 className="section-title mb-4">Announcement</h6>
            <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br/> rerum commodi corrupti, temporibus non quam.</p>

            <div className="row text-left">
                <div className="col-md-4">
                    <div className="card border mb-4">
                        <div className="card-body">
                            <h5 className="card-title">English for Everyone</h5>
                            <div className="post-details">
                                <a href="/#">Posted By: Admin</a>
                                
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ad vel dolorum, iusto velit, minima? Voluptas nemo harum impedit nisi.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Ahmed Saper student story</h5>
                            <div className="post-details">
                                <a href="/#">Posted By: Admin</a>
                                
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ad vel dolorum, iusto velit, minima? Voluptas nemo harum impedit nisi.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border mb-4">
                        <div className="card-body">
                            <h5 className="card-title">All appointments today is canceld</h5>
                            <div className="post-details">
                                <a href="/#">Posted By: Admin</a>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ad vel dolorum, iusto velit, minima? Voluptas nemo harum impedit nisi.</p>
                        </div>
                    </div>
                </div>
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

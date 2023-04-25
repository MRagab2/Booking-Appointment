import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
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
   </>
  )
}

import React from "react";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
           <nav class="navbar navbar-expand-lg navbar-light shadow">
  <div class="container">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/Donation">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/About">Donation</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/service">Services</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
        </li>
      </ul>
      <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">Charity and Donation Platform</NavLink>
      <NavLink to= "/login" className="btn btn-outline-primary ms-auto px-4 rounded-pill">
       <i className="fa fa-sign-in me-2"></i> Login</NavLink>
      <NavLink to="/register" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
      <i className="fa fa-user-plus me-2"></i> Register</NavLink>
    </div>
  </div>
</nav>
    </div>
    )
}

export default Navbar;
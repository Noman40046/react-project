import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <Link class="navbar-brand" to="/"
          ><img class="w-50" src="../../img/logo.png" alt="main-logo"
        /></Link>
        <button
        class="navbar-toggler"
        type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/"
                >Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/services">Services</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/About">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Contact">Contact</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/progress">Progress</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Faq">FaQ</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Price">Price</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Form">Form</Link>
            </li>
            <button
              type="button"
              class="btn btn-outline-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal">
                Sign In
            </button>
          </ul>
        </div>
      </div>
    </nav>
        </div>
    );
};

export default Navbar;
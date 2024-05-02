import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img class="w-50" src="../../img/logo.png" alt="main-logo"
        /></a>
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
              <a class="nav-link active" aria-current="page" href="#Home"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#About">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Contact">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Faq">FaQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Price">Price</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Form">Form</a>
            </li>
            <button
              type="button"
              class="btn btn-outline-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Sign in
            </button>
          </ul>
        </div>
      </div>
    </nav>
        </div>
    );
};

export default Navbar;
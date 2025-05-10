import React from "react";
import { Link } from "react-router-dom";;

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light bg-body-tertiary border-bottom p-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="media/images/logo.svg" style={{ width: "20%" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Product">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to ="/Pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to ="/Support">Support</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" target="_blank"   href="http://localhost:8080/Dashboard">Dashboard</a>
              </li>
             

              <li className="nav-item">
                <a className="nav-link active">
                  <i className="fa-solid fa-bars"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

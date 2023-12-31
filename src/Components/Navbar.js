import React from "react";
import Proptypes from 'prop-types';
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <button type="button" onClick={props.toggleMode} className={`btn btn-${props.mode==='light'?'dark':'light'} mx-5`}> {props.mode==='light'?'dark':'light'} </button>
    </nav>
  );
}

export default Navbar;


Navbar.Pproptypes = {
    title: Proptypes.string,  //.required (props is required)    //title will be string only
    aboutText: Proptypes.string
}

Navbar.defaultProps = {
    title: "Hello",
    aboutText: "About"
}
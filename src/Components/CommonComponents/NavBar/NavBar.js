import React from 'react';
import Logo from './Logo.png'
import './Navigation.css'
import {
    Route,
    Link
  } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ps-4 pe-4 fixed-top text-white bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand navigationLogo" href="#"><img src={Logo}  alt="" /> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fw-bolder" id="navbarNavAltMarkup">
                        <div className="navbar-nav m-auto ">
                             <a className="nav-link active text-white ps-4 pe-4" aria-current="page" href="#Home">HOME</a> 
                             <a className="nav-link text-white ps-4 pe-4" href="#About">ABOUT</a> 
                             <a className="nav-link text-white ps-4 pe-4" href="#Experience">EXPERIENCE</a> 
                             <a className="nav-link text-white ps-4 pe-4" href="#Projects">PROJECTS</a> 
                             <a className="nav-link text-white ps-4 pe-4" href="#Blog">Blog</a> 
                             <a className="nav-link text-white ps-4 pe-4" href="#Contact">CONTACT</a> 
                        </div>
                        <div className="navbar-nav ms-auto">+8801708902648</div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
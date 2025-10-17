import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo1.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="img" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;

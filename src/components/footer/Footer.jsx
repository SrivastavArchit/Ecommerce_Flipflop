import React from 'react'
import './Footer.css'
import { SiInstagram } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import logo_big from "../assets/logo_big.png"
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer  '>
        <div className='footer_logo'>
            <img src={logo_big} alt="" />
            <h3 > FlipZone</h3>
        </div>
        <ul className='footer_link'>
            <li>Company</li>
            <li>Products</li>
            <li> Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      <div className='footer_icon'>
        <div className='icon_container'>
           <SiInstagram />
        </div>
        <div className='icon_container'>
        <BsTwitterX />
        </div>
        <div className='icon_container'>
        <Link to={"https://www.linkedin.com/in/archit-srivastava-b7284a24a/"}><FaLinkedin /></Link>
        </div>
      </div>
      <div>
        <h4>Made with 🖤 by <span className='myname'>Archit Srivastava</span> </h4>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import './CssFiles/Foter.css';
import { Link } from 'react-router-dom';


export default function Foter() {
  return (

    <footer id="footer">
      <div className="logo"> <img src='/gym5.png' alt='not found' />
      </div>
      <p id="set">Blog4u is a popular blogging platform where we provide our users with interesting and informative
        content related to technology, sports, and health. We have been operational for over 5 years and have built
        up a large following of loyal readers. </p>
      <ul id="shorts" className="one">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/Writer">BECOME AN ARTICLE WRITER</Link></li>
        <li><Link to="/Contact">CONTACT US </Link></li>
        <li><Link to="/Login">LOG IN </Link></li>
      </ul>
      <ul id="shorts" className="two">
        <li><Link to="/Aboutus">ABOUT US</Link></li>
        <li><Link to="/TermCondition">TERMS AND CONDITIONS</Link></li>
        <li><Link to="/TermCondition">PRIVACY POLICY </Link></li>
        <li><Link to="/Disclaimer">DISCLAIMER </Link></li>
      </ul>
      <p className="cpy">Copyright © 2023 BLOG 4U | All Right Reserved</p>
    </footer>




  )
}


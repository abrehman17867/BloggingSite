import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './CssFiles/Contact.css';

export default (function Contact() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    desc: ''
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }


  const handlecontact = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/contact", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      navigate("/");
    } else {
      console.error("Error occurred while submitting the form.");
    }
  }





  return (
    <div>
      <div className="container">
        <h1> Contact Us<img src="cont.jpg" alt="not found" />
          <form className="myForm" >
            <input onChange={handleForm} className="myInput" type="text" name="name" placeholder="Enter your name" />
            <input onChange={handleForm} className="myInput" type="email" name="email" placeholder="Enter your email" />
            <input onChange={handleForm} className="myInput" type="tel" name="phone" placeholder="Enter your phone" />
            <input onChange={handleForm} className="myInput" type="text" name="address" placeholder="Enter your address" />
            <input onChange={handleForm} className="myInput" type="text" name="desc" placeholder="Enter your description" />
            <button onClick={handlecontact} className="btn">Submit</button>
          </form>
        </h1>
      </div>
    </div>
  )
})

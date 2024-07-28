import React, { useState } from "react";
import './CssFiles/Nav.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const [Searchdata, setSearchdata] = useState({

  });
  const handleSearchinput = (e) => {
    setSearchdata({
      ...Searchdata,
      [e.target.name]: e.target.value

    })
  }

  const handleSearchapi = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/searchapi", {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Searchdata) // Assuming Searchdata holds the search query

      });

      if (response.ok) {
        const result = await response.text();
        if (result === "onlineearning") {
          navigate("/Login"); // Replace with the appropriate route
        } else if (result === "cryptotrading") {
          navigate("/cryptotrading"); // Replace with the appropriate route
        } else if (result === "web3") {
          navigate("/web3"); // Replace with the appropriate route
        } else if (result === "artificial") {
          navigate("/artificial"); // Replace with the appropriate route
        } else if (result === "blockchain") {
          navigate("/blockchain"); // Replace with the appropriate route
        } else if (result === "metaverse") {
          navigate("/metaverse"); // Replace with the appropriate route
        } else if (result === "articles") {
          navigate("/articles"); // Replace with the appropriate route
        } else if (result === "futurearticles") {
          navigate("/futurearticles"); // Replace with the appropriate route
        }
        else if (result === "comingsoon") {
          navigate("/comingsoon"); // Replace with the appropriate route
        }
        else if (result === "home") {
          navigate("/"); // Replace with the appropriate route
        }
        else if (result === "about") {
          navigate("/About"); // Replace with the appropriate route
        }
        else if (result === "contactus") {
          navigate("/Contact"); // Replace with the appropriate route
        }
        else if (result === "login") {
          navigate("/Login"); // Replace with the appropriate route
        }
        else if (result === "becomewriter") {
          navigate("/Writer"); // Replace with the appropriate route
        }
        else if (result === "termCondition") {
          navigate("/TermCondition"); // Replace with the appropriate route
        }
        else if (result === "privacypolicy") {
          navigate("/TermCondition"); // Replace with the appropriate route
        }
        else if (result === "disclaimer") {
          navigate("/Disclaimer"); // Replace with the appropriate route
        }
        else {
          console.error("Error occurred while searching.");
        }
      } else {
        navigate("/Error"); // Replace with the appropriate route
      }
    } catch (error) {
      console.error("Error occurred while searching.", error);
    }
  };





  return (
    <nav className="navbar navbar-expand-lg  bg-black " data-bs-theme="dark">

      <div className="container-fluid">
        <div className="logo">
          <img src={'/gym5.png'} alt="not found" />
          <Link className="navbar-brand " style={{ color: 'red' }} to="/">Blog 4u</Link>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{ position: 'inherit', scale: '2' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{ marginLeft: '20px' }}>
            <li className="nav-item">
              <Link className="nav-link " style={{ color: 'wheat' }} aria-current="page" to="/" >HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " style={{ color: 'wheat' }} aria-current="page" to="/Writer">BECOME AN ARTICLE WRITER</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " style={{ color: 'wheat' }} aria-current="page" to="/Contact">CONTACT US</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " style={{ color: 'wheat' }} aria-current="page" to="/Login">LOG IN</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" style={{ color: 'wheat' }} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                MORE
              </a>
              <ul className="dropdown-menu bg-black">
                <li><Link className="dropdown-item" style={{ color: 'wheat' }} to="/Aboutus">ABOUT US</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" style={{ color: 'wheat' }} to="/TermCondition">TERMS AND CONDITIONS</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" style={{ color: 'wheat' }} to="/TermCondition">PRIVACY AND POLICY</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" style={{ color: 'wheat' }} to="/Disclaimer">DISCLAIMER</Link></li>
              </ul>
            </li>
          </ul>



          <form className="d-flex" role="search">
            <input onChange={handleSearchinput} name="search" className="form-control me-2" id='navinput' type="search" placeholder="Search" aria-label="Search" />
            <button onClick={handleSearchapi} className="btn btn-outline-success" id='navsrchbtn' type="submit">Search</button>
          </form>
        </div>
      </div>

    </nav>

  )
}

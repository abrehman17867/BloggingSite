import React, { useState } from "react";
import './CssFiles/Sign2.css';
import { useNavigate } from 'react-router-dom';

export default function Sign2() {
    const navigate = useNavigate();
    const [passortext, setpassortext] = useState("password")
    const [eyeVisible, seteyeVisible] = useState({
        display: "block"
    });
    const [eyeHide, seteyeHide] = useState({
        display: "none"
    });

    function hideshow1() {
        setpassortext("text")
        seteyeVisible({
            display: "none"
        });
        seteyeHide({
            display: "block"
        });
    }
    function hideshow2() {
        setpassortext("password")
        seteyeVisible({
            display: "block"
        });
        seteyeHide({
            display: "none"
        });
    }

    const [pass, setpass] = useState({
        verifypass: ''
    });
    const handlePassword = (e) => {
        
        setpass({
            ...pass,
            [e.target.name]: e.target.value
        })
    }
    const handleVerifyCode = async (e) => {
        console.log(pass)
        e.preventDefault();
        const response = await fetch("http://localhost:8080/api/sign21", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pass)
        });
        if (response.ok) {
            navigate("/Setpass");
        } else {
            setplaceHol("Incorrect verify password")
            setborderDesign({ border: "2px solid red" })
            // setpass({ verifypass: '' });
            console.error("Error occurred while checking code.");
        }
    }
    const [placeHol, setplaceHol] = useState("Enter verify password")
    const [borderDesign, setborderDesign] = useState({
        border: "2px solid white"
    })
    return (
        <div>
            <div className="containersign1-sign2">
                <div className="containersign2-sign2">
                    <form id="verifyform-sign2">
                        <input  onChange={handlePassword}  type={passortext} id="password" name="verifypass" placeholder={placeHol} style={borderDesign} required />
                        <button onClick={handleVerifyCode}>submit</button>
                    </form>
                    <div className="eyepos-sign2">
                        <i className='bx bx-low-vision' onClick={hideshow1} style={eyeVisible}  ></i>
                        <i className='bx bx-show-alt' onClick={hideshow2} style={eyeHide}></i>
                        <span htmlFor="">show password</span>
                    </div>
                    <button><a href="/login0">Resend Verificaion Code</a></button>
                </div>
            </div >
        </div>
    )
}
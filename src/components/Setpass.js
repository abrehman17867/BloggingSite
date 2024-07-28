import React, { useState } from "react";
import './CssFiles/Setpass.css';
import { useNavigate } from 'react-router-dom';


export default function Setpass() {
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

    // 
    const [pass, setpass] = useState({

    });
    const handlepassword = (e) => {
        setpass({
            ...pass,
            [e.target.name]: e.target.value
        })
    }
    

    const handlesentpass = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/setpass", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pass)
        });
        if (response.ok) {
            navigate("/Login");
        } else {
            console.error("Error occurred while sending email.");
        }
    }




    return (
        <div>
            <div class="containersign1">
                <div class="containersign2">
                    <h1>SIGN UP</h1>
                    <form action="/setpas" method="post">
                        <input onChange={handlepassword} type="text" class="input-feild" name="username" placeholder="Enter user name" required minlength="5" />
                        <input onChange={handlepassword} type={passortext} id="password" name="password"  class="input-feild" minlength="7" required placeholder="Enter password " />

                        <div className="eyepos">
                            <i className='bx bx-low-vision' onClick={hideshow1} style={eyeVisible}  ></i>
                            <i className='bx bx-show-alt' onClick={hideshow2} style={eyeHide}></i>
                            <span htmlFor="">show password</span>
                        </div>

                        <input onChange={handlepassword} class="check-box" type="checkbox" name="checkbox" /><span>
                            I agree to all terms and the conditions</span>
                        <button onClick={handlesentpass}>SIGN UP</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

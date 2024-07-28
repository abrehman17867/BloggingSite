import React, { useState } from "react";
import './CssFiles/Login.css';
import { useNavigate } from 'react-router-dom';

export default (function Login() {
    const navigate = useNavigate();

    const [loginVisible, setLoginVisible] = useState(true);
    const [registerVisible, setRegisterVisible] = useState(false);
    const [btnStyle, setBtnStyle] = useState({
        left: "0px",
        background: "linear-gradient(to right, #f3f3f3, #ff2a2a)"
    });

    function register() {
        setLoginVisible(false);
        setRegisterVisible(true);
        setBtnStyle({
            left: "110px",
            background: "linear-gradient(to left, #f3f3f3, #ff2a2a)"
        });
    }

    function login() {
        setLoginVisible(true);
        setRegisterVisible(false);
        setBtnStyle({
            left: "0px",
            background: "linear-gradient(to right, #f3f3f3, #ff2a2a)"
        });
    }

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


    // 
    const [email, setemail] = useState({
    });
    const handleEmail = (e) => {
        setemail({
            ...email,
            [e.target.name]: e.target.value
        })
    }

    const handlesendVerification = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/emailverify", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(email)
        });
        if (response.ok) {
            navigate("/Sign2");
        } else {
            console.error("Error occurred while sending email.");
        }
    }
    // 
    const [Upholder, setUpholder] = useState("user id")
    const [Lpholder, setLpholder] = useState("user password")
    const [borderColorN, setborderColorN] = useState({
        borderBottom: "1px solid black"
    })
    const [borderColorP, setborderColorP] = useState({
        borderBottom: "1px solid black"
    })


    const [logindata, setlogindata] = useState({
    });
    const handleLogin = (e) => {
        setlogindata({
            ...logindata,
            [e.target.name]: e.target.value
        })
    }

    const handlelogindata = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/api/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(logindata)
        });
        if (!response.ok) {
            return response.json().then(errorData => {
                if (response.status === 401) {
                    if (errorData.error === 'Password is not correct') {
                        setLpholder("incorrect user password")
                        setborderColorP({ borderBottom: "1px solid red" })
                    } else if (errorData.error === 'Username is not correct') {
                        setLpholder("incorrect user password")
                        setUpholder("incorrect user id or name")
                        setborderColorN({ borderBottom: "1px solid red" })
                        setborderColorP({ borderBottom: "1px solid red" })
                    }
                }
            });
        }
        else if (response.ok) {
            navigate("/");
        } else {
            console.error("Error occurred while login.");
        }
    }
    return (
        <div>
            <div className="container">
                <div className="container1">
                    <div id="btn">
                        <div id="btns" style={btnStyle}> </div>
                        <button className="toggle-btn" type="button" onClick={login}>Login </button>
                        <button className="toggle-btn" type="button" onClick={register}>signup</button>
                    </div>
                    <div className="social-buttons">
                        <button><i className="bx bxl-facebook-circle" style={{ color: 'blue', fontSize: '40px' }}></i>
                            <div className="bg" style={{ background: 'white' }}></div>
                        </button>
                        <button><i className="bx bxl-youtube"></i>
                            <div className="bg" style={{ background: 'red' }}></div>
                        </button>
                        <button><i className="bx bxl-twitter"></i>
                            <div className="bg" style={{ background: 'rgb(69, 69, 233)' }}></div>
                        </button>
                    </div>

                    <form className="input-group" id="login" style={{ display: loginVisible ? "block" : "none" }}>
                        <input onChange={handleLogin} id="username" className="input-feild" type="text" name="username" placeholder={Upholder}
                            required="required" autoComplete="username" style={borderColorN} />
                        <input onChange={handleLogin} id="password" className="input-feild" type={passortext} name="password" placeholder={Lpholder}
                            required="required" autoComplete="current-password" style={borderColorP} />
                        <div className="eyepos">
                            <i className='bx bx-low-vision' onClick={hideshow1} style={eyeVisible}  ></i>
                            <i className='bx bx-show-alt' onClick={hideshow2} style={eyeHide}></i>
                            <span htmlFor="">show password</span>
                        </div>
                        <button onClick={handlelogindata} className="submit-btn">Submit</button>

                    </form>

                    <form className="input-group" style={{ display: registerVisible ? "block" : "none" }} action="/signup" method="post" id="register">
                        <input onChange={handleEmail} className="input-feild" type="email" name="email" placeholder="User E-mail" autoComplete="input_feild" required="required" />
                        <input onChange={handleEmail} className="check-box" type="checkbox" name="checkbox" /><span>
                            I agree to all terms and the conditions</span>
                        <button onClick={handlesendVerification} className="submit-btn">send verification code</button>
                    </form>
                </div>
            </div>
        </div>
    );
});
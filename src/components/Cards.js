import React from 'react'

import './CssFiles/Cards.css';

export default (function Cards(props) {
    return (
        <div>

            <div className="card" id="card">
                <div className="back-face" style={{ backgroundImage: `url("${props.image}")`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <h3>{props.backTitle}</h3>
                    <p>{props.description}</p>
                    <a href="/onlineearning">Continuous reading </a>
                </div>
                <div className="front-face" style={{ backgroundImage: `url("${props.image}")`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <h3>{props.frontTitle}</h3>
                    <div className="card-box">
                        <div className="card-content"></div>
                    </div>
                </div>
            </div>



        </div>
    )
})

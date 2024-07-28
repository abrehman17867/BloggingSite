import React from 'react'

import './CssFiles/Scroller.css';
import { Link } from 'react-router-dom';

export default (function Scroller() {
    return (
        <div>
            <div className="containerSC">
                <li>
                    <Link to="#" onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}>
                        <div className="imgset">
                            <i className='bx bx-up-arrow-alt'></i>
                        </div>
                    </Link>
                </li>
            </div>
        </div>
    )
})

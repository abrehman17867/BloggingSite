import React from 'react'
import { Link } from 'react-router-dom'
import './CssFiles/Errorstyle.css'

export default function Error() {
    return (
        <div>

            <section id="errors">
                <h1>
                    Try different keywords
                </h1>

                <p>
                    Did not match any thing
                </p>
                <h2>
                    Suggestions:
                </h2>
                <ul>
                    <li>
                        <p>Try more authentic words</p>
                    </li>
                    <li>
                        <p>Make sure your spelling corrects</p>
                    </li>
                    <li>
                        <p><Link to="/">Try again</Link> </p>
                    </li>
                </ul>
            </section>

        </div>
    )
}

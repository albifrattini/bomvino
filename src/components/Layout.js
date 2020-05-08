import React from "react"

import logo from "../images/logo.jpg"

const layout = ({ children, clicked }) => {

    return (
        <div style={{ position: 'relative' }}>
            <header className="nav-header">
                <div className="nav-container">
                    <img src={logo} alt="logo" />
                    <button className="contact-btn" onClick={clicked}>Provalo</button>
                </div>
            </header>
            <main>{children}</main>
        </div>
    )

}

export default layout
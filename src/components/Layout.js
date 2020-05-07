import React from "react"

import logo from "../images/logo.jpg"

const layout = ({ children }) => {

    return (
        <>
            <header className="nav-header">
                <div className="nav-container">
                    <img src={logo} alt="logo" />
                    <button className="contact-btn">Provalo</button>
                </div>
            </header>
            <main>{children}</main>
            {/* <footer></footer> */}
        </>
    )

}

export default layout
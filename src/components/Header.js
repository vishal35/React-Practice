import React, { useState } from "react"
import { LOGO_URL } from "../utils/constant"
import { Link } from "react-router-dom"

const Header = () => {

    const [btnName, setBtnName] = useState("Login")

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-200">
            <div className="logo-container">
                <img className="h-28 p-2" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex py-10">
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About Us</Link></li>
                    <li className="px-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-2"><Link to="/instamart">InstaMart</Link></li>
                    <li className="px-2">Cart</li>
                    <button className="login" onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header
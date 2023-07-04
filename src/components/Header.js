import React, { useState } from "react"
import Logo from "../assets/img/Logo.png"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import store from "../utils/store"
import useOnline from "../utils/useOnline"

const Header = () => {

    const [btnName, setBtnName] = useState("Login")
    const isOnline = useOnline()
    const cartItems = useSelector(store => store.cart.items)

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-200">
            <div className="logo-container">
                <img data-testid="logo" className="h-28 p-2" src={Logo} />
            </div>
            <div className="nav-items">
                <ul className="flex py-10">
                    <Link to="/"><li className="px-2">Home</li></Link>
                    <Link to="/about"><li className="px-2">About Us</li></Link>
                    <Link to="/contact"><li className="px-2">Contact Us</li></Link>
                    <Link to="/instamart"><li className="px-2">InstaMart</li></Link>
                    <Link to="/cart"><li data-testid="cart" className="px-2">Cart - {cartItems.length}</li></Link>
                    <span className="px-2" data-testid="online-status">{isOnline ? "online" : "offline"}</span>
                    <button className="login" onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header
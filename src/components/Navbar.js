import React from "react";
import Search from "./Search";
import Logo from "./Logo";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <Logo/>
            <Search/>
        </div>
        
    )
}

export default Navbar;
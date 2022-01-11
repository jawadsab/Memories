import React from "react";
import "./styles.css";

const Navbar = () => {
    const user = null;
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <span>Memories</span>
            </div>
            <div className="navbar-right">
                <button className="btn sign-in">sign in</button>
            </div>
        </nav>
    )
}

export default Navbar;
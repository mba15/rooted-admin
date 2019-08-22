import React from "react"
import {Link} from "react-router-dom";

function NavBar(props){
    return(
        <div className="navbar topbar">
            <div className="links">
            <Link to="/" className="navlink">  Home   </Link>
            </div>
         
        </div>
    )
}

export default NavBar;
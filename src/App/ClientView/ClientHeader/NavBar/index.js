import React from "react"
import {Link} from "react-router-dom";


function NavBar(props){
    return(
        <div className="navbar topbar">
            
            <Link to="/" className="navlink">  Home   </Link>
         
        </div>
    )
}

export default NavBar;
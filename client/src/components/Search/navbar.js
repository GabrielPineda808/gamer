import React from 'react';
import { Link } from "react-router-dom";
function Navbar() {
    const styles ={
        fontSize:{
            fontSize: 54,
            fontWeight: 'bold'
        }
    }
    
    
    return (
        <div className="warpper">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand ml-5" style={styles.fontSize} href="#">Gamer'R'View</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                    <Link to={'/login'}><a className="nav-link " href="#">Login </a></Link>
                    <Link to={'/signup'}><a className="nav-link mr-5" href="#">Sign Up</a></Link>
                    </div>
                </div>
            </nav>      
        </div>
  )
    
}

export default Navbar;
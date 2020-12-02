import React from 'react';
import { Link } from "react-router-dom";
function Navbar() {
    const styles ={
        fontSize:{
            fontSize: 54,
            fontWeight: 'bold'
        },
        color:{
            background: '#8f5cf2'
        }
    }
    
    
    return (
        <div className="wrapper" style={styles.color}>
            <nav className="navbar navbar-expand-lg navbar-light" style={styles.color}>
                <a className="navbar-brand ml-5" style={styles.fontSize} href="#">Gamer'R'View</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                    <Link to={'/'}><a className="nav-link " href="#">Search </a></Link>
                    <Link to={'/signup'}><a className="nav-link mr-5" href="#">Sign Up</a></Link>
                    
                    </div>
                </div>
            </nav>      
        </div>
  )
    
}

export default Navbar;
import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {

    console.log(props);
    
    setTimeout(() => {
        props.history.push('/about')    //Redirect to about page after 2 secs
    }, 2000)

    return (
        // Materialize css:
        <nav className="nav-wrapper red darken-3">

            <div className="container">

                <a className="brand-logo">React Router</a>

                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div >

        </nav >
    )
}

export default withRouter(Navbar)
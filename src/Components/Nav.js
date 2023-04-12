import logo from '../imgs/logo.svg'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <header>
    <div className="nav">
        <img src={logo} alt="logo composed of overlapping 'j' and 'w'" />
        <div className="links">
            <NavLink
                    to="/"
                    style={({ isActive }) => {
                return {
                fontWeight: isActive ? "bold" : "",
                textDecoration: isActive ? "underline" : ""
                };
                }}>
                        portfolio
            </NavLink>
            <NavLink
                    to='/about'
                    style={({ isActive }) => {
                    return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: isActive ? "underline" : ""
                    };
                    }}>
                        about
                </NavLink>
                <NavLink
                    to='/contact'
                    style={({ isActive }) => {
                    return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: isActive ? "underline" : ""
                    };
                    }}>
                        contact
                </NavLink>
        </div>
    </div>
    </header>
    )
}

export default Nav;
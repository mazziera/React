// 2- Links com React Router

//component da biblioteca
import { Link, NavLink } from "react-router-dom";

import "./Nav.css";
const Nav = () => {

    return(
        <nav>
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link> */}

            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    )
}

export default Nav
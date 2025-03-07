import { NavLink } from "react-router-dom"

export const Header = () =>{


    return(
        <div className="header">  
        <h4>WorldAtlas</h4>
        <nav className="routes">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Product">Country</NavLink>
            <NavLink to="/AddToCart">Contact</NavLink>
        </nav>

        </div>
    )
}
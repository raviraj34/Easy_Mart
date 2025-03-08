import { NavLink } from "react-router-dom"

export const Header = () => {


    return (
        <div className="header">
            <div className="appname">
                <h2>EasyMart</h2>
            </div>
            <div className="navbar">
                <nav className="routes">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/About">About</NavLink>
                    <NavLink to="/Product">Product</NavLink>
                    <NavLink to="/AddToCart">
                    <button>Add To Cart</button></NavLink>
                </nav>
            </div>
        </div>
    )
}
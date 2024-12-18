import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    return (
        <>
            <nav className="navbar  navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="nav-logo" href="#" ><img src="https://i.ytimg.com/vi/TDeaHykcV20/hqdefault.jpg" alt="navbar-logo" style={{ width: "50px", height: "50px" }}></img></a>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbar-nav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbar-nav">

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutus">About Us</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/recipe-generator">Recipe Generator</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/saved-recipe">Favorite Recipe</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contactus">Contact Us</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login/Ragister</Link>
                        </li>


                        <li className="nav-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIYPQpAHWfspO8qrIdSO7Pkx-JpkIU03WVA&s" alt="profile" style={{ width: "40px", height: "40px", borderRadius: "50%" }}></img>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
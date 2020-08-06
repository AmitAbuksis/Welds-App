import React from "react";
import useStyle from "./Navigation.style";
import "./Navigation.css";

import { NavLink } from "react-router-dom";

const Navigation = (props) => {
    const classes = useStyle();

    const toggleClassActive = () => {
        const navbarLinks = document.getElementsByClassName("navbar-links")[0];
        navbarLinks.classList.toggle("active");
    };
    return (
        <div className={classes.container}>
            <nav className="navbar">
                <div className="brand-title"> </div>
                <a className="toggle-button" onClick={toggleClassActive}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <div className="navbar-links">
                    <ul>
                        <li onClick={toggleClassActive}>
                            <NavLink to="/" exact className={classes.navLink} activeStyle={{ backgroundColor: "#4CAF50", color: "white" }}>
                                עמוד הבית
                            </NavLink>
                        </li>
                        <li onClick={toggleClassActive}>
                            <NavLink to="/about" exact className={classes.navLink} activeStyle={{ backgroundColor: "#4CAF50", color: "white" }}>
                                אודותינו
                            </NavLink>
                        </li>
                        <li onClick={toggleClassActive}>
                            <NavLink
                                to="/ourCustomers"
                                exact
                                className={classes.navLink}
                                activeStyle={{ backgroundColor: "#4CAF50", color: "white" }}
                            >
                                לקוחותינו
                            </NavLink>
                        </li>
                        <li onClick={toggleClassActive}>
                            <NavLink to="/gallery" exact className={classes.navLink} activeStyle={{ backgroundColor: "#4CAF50", color: "white" }}>
                                גלריה
                            </NavLink>
                        </li>
                        <li onClick={toggleClassActive}>
                            <NavLink to="/contact" exact className={classes.navLink} activeStyle={{ backgroundColor: "#4CAF50", color: "white" }}>
                                צור קשר
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default Navigation;

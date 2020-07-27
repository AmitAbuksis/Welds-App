import React from "react";
import useStyle from "./Navigation.style";

import { NavLink } from "react-router-dom";

const Navigation = (props) => {
    const classes = useStyle();
    return (
        <div className={classes.navContainer}>
            <div className={classes.navItems}>
                <NavLink to="/" exact className={classes.navLink} activeStyle={{ backgroundColor: "#4CAF50", color: "white" }}>
                    עמוד הבית
                </NavLink>
                <NavLink to="/about" exact className={classes.navLink} activeStyle={{ backgroundColor: "#4CAF50", color: "white" }}>
                    אודותינו
                </NavLink>
                <NavLink to="/services" exact className={classes.navLink} activeStyle={{ backgroundColor: "#4CAF50", color: "white" }}>
                    שירותים
                </NavLink>
                <NavLink to="/ourCustomers" exact className={classes.navLink} activeStyle={{ backgroundColor: "#4CAF50", color: "white" }}>
                    לקוחותינו
                </NavLink>
                <NavLink to="/gallery" exact className={classes.navLink} activeStyle={{ backgroundColor: "#4CAF50", color: "white" }}>
                    גלריה
                </NavLink>
                <NavLink to="/contact" exact className={classes.navLink} activeStyle={{ backgroundColor: "#4CAF50", color: "white" }}>
                    צור קשר
                </NavLink>
            </div>
            <div className={classes.burgers}>
                <div className={classes.line1}></div>
                <div className={classes.line2}></div>
                <div className={classes.line3}></div>
            </div>
        </div>
    );
};
export default Navigation;

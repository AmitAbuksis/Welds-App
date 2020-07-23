import React from "react";
import useStyle from "./Navigation.style";

import { NavLink } from "react-router-dom";

const Navigation = (props) => {
    const classes = useStyle();
    return (
        <div>
            <NavLink to="/">עמוד הבית</NavLink>
            <NavLink to="/about">אודותינו</NavLink>
            <NavLink to="/services">שירותים</NavLink>
            <NavLink to="/gallery">גלריה</NavLink>
            <NavLink to="/contact">צור קשר</NavLink>
        </div>
    );
};
export default Navigation;

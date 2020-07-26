import React from "react";
import useStyle from "./Footer.style";

const Header = (props) => {
    const classes = useStyle();
    return (
        <div className={classes.footerContainer}>
            <div>Links Section</div>
            <div>Social Media Section</div>
        </div>
    );
};
export default Header;

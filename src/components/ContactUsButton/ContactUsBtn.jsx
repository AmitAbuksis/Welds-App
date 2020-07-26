import React from "react";
import useStyle from "./ContactUsBtn.style";

import { Link } from "react-router-dom";

const ContactUsBtn = (props) => {
    const classes = useStyle();
    const { label, direction } = props;
    return (
        <Link to={direction ? direction : "/"} className={classes.linkStyle}>
            {label}
        </Link>
    );
};
export default ContactUsBtn;

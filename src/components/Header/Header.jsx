import React from "react";
import useStyle from "./Header.style";
import headerImage from "../../assets/images/header-image.jpg";

import { useHistory } from "react-router-dom";

import { Typography } from "@material-ui/core";

const Header = (props) => {
    const { headerTitle, headerSubTitle } = props;
    const history = useHistory();
    const classes = useStyle();
    return (
        <div className={classes.headerContainer}>
            <div className={classes.headerElements} onClick={() => history.push("/")}>
                <img className={classes.logoImage} alt={`${headerTitle}`} src={headerImage} />
                <div>
                    <Typography variant="h3">{headerTitle}</Typography>
                    <Typography variant="h5" className={classes.headerSubTitle}>
                        {headerSubTitle}
                    </Typography>
                </div>
            </div>
        </div>
    );
};
export default Header;

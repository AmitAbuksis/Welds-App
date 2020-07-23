import React from "react";
import useStyle from "./Header.style";

import { Typography } from "@material-ui/core";

const Header = (props) => {
    const classes = useStyle();
    return (
        <div className={classes.headerContainer}>
            <div className={classes.headerElements}>
                <img className={classes.logoImage} alt="ריתוכי חוזה" />
                <div>
                    <Typography variant="h3">ריתוכי חוזה</Typography>
                    <Typography variant="h5" className={classes.headerSubTitle}>
                        עבודות ריתוך מקצועיות
                    </Typography>
                </div>
            </div>
        </div>
    );
};
export default Header;

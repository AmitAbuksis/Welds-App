import React from "react";
import useStyle from "./Footer.style";

import { useHistory } from "react-router-dom";

import Tooltip from "@material-ui/core/Tooltip";

const Header = (props) => {
    const { redirectToSocialMedia } = props;
    const history = useHistory();
    const classes = useStyle();
    return (
        <div className={classes.footerContainer}>
            <div className={classes.linksContainer}>
                <div className={classes.linksSubContainer}>
                    <div className={classes.linkContent}>לינק 1</div>
                    <div className={classes.linkContent}>לינק 2</div>
                </div>
                <div className={classes.linksSubContainer}>
                    <div className={classes.linkContent}>לינק 3</div>
                    <div className={classes.linkContent}>לינק 4</div>
                </div>
                <div className={classes.ourCustomerLink} onClick={() => history.push("/ourCustomers")}>
                    בין לקוחותינו
                </div>
            </div>
            <div className={classes.socialMediaIconsContainer}>
                <div onClick={() => redirectToSocialMedia("facebook")}>
                    <Tooltip title="facebook">
                        <img className={classes.socialMediaIcons} alt="facebook" src="https://img.icons8.com/fluent/48/000000/facebook-new.png" />
                    </Tooltip>
                </div>
                <div onClick={() => redirectToSocialMedia("instagram")}>
                    <Tooltip title="instagram">
                        <img className={classes.socialMediaIcons} alt="instagram" src="https://img.icons8.com/fluent/48/000000/instagram-new.png" />
                    </Tooltip>
                </div>
            </div>
            <div className={classes.copyrights}>CopyRights by Amit Abuksis</div>
        </div>
    );
};
export default Header;

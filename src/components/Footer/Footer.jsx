import React from "react";
import useStyle from "./Footer.style";

import facebookIcon from "../../assets/images/facebook_icon.png";
import instagramIcon from "../../assets/images/instagram_icon.jpg";

const Header = (props) => {
    const { redirectToSocialMedia } = props;
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
                <div className={classes.ourCustomerLink}>בין לקוחותינו</div>
            </div>
            <div className={classes.socialMediaIconsContainer}>
                <div onClick={() => redirectToSocialMedia("facebook")}>
                    <img className={classes.socialMediaIcons} alt="facebook" src={facebookIcon} />
                </div>
                <div onClick={() => redirectToSocialMedia("instagram")}>
                    <img className={classes.socialMediaIcons} alt="instagram" src={instagramIcon} />
                </div>
            </div>
            <div className={classes.copyrights}>CopyRights by Amit Abuksis</div>
        </div>
    );
};
export default Header;

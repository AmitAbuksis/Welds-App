import React from "react";
import useStyle from "./GalleryPage.style";
import exampleLogo from "../../assets/images/example_logo.png";

import Button from "../../components/Button/Button";

import { Typography } from "@material-ui/core";

const GalleryPage = (props) => {
    const classes = useStyle();
    return (
        <div className={classes.galleryContainer}>
            <div className={classes.galleryHeader}>
                <Button label={"הקליקו כאן ליצירת קשר"} direction={"/contact"} />
                <br />
                <Button label={"בין לקוחותינו"} direction={"/ourCustomers"} />
                <Typography variant="h5">גלריית עבודות ריתוך</Typography>
            </div>
            <div className={classes.galleryImagesContainer}>
                <div className={classes.galleryImagesRow}>
                    <img src={exampleLogo} alt="exampleLogo" className={classes.image} />
                    <img src={exampleLogo} alt="exampleLogo" className={classes.image} />
                    <img src={exampleLogo} alt="exampleLogo" className={classes.image} />
                </div>
                <div className={classes.galleryImagesRow}>
                    <img src={exampleLogo} alt="exampleLogo" className={classes.image} />
                    <img src={exampleLogo} alt="exampleLogo" className={classes.image} />
                    <img src={exampleLogo} alt="exampleLogo" className={classes.image} />
                </div>
                <div className={classes.galleryImagesRow}>
                    <img src={exampleLogo} alt="exampleLogo" className={classes.image} />
                    <img src={exampleLogo} alt="exampleLogo" className={classes.image} />
                    <img src={exampleLogo} alt="exampleLogo" className={classes.image} />
                </div>
            </div>
            <div className={classes.contactUsBtn}>
                <Button label={"צרו איתנו קשר"} direction={"/contact"} />
            </div>
        </div>
    );
};
export default GalleryPage;

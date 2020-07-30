import React from "react";
import useStyle from "./ErrorPage.style";

import Button from "../../components/Button/Button";

import pageNotFooundPicture from "../../assets/images/pageNotFound.jpg";
import { Typography } from "@material-ui/core";

const ErrorPage = (props) => {
    const classes = useStyle();
    return (
        <div className={classes.errorPagecontainer}>
            <Typography variant="h5">אופס! דף לא נמצא</Typography>
            <img alt="404" src={pageNotFooundPicture} />
            <Typography variant="h6">אנחנו מצטערים, אך הדף שביקשת לא נמצא</Typography>
            <div className={classes.homeBtn}>
                <Button label={"למעבר לעמוד הבית"} />
            </div>
        </div>
    );
};
export default ErrorPage;

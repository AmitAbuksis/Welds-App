import React from "react";
import useStyle from "./ErrorPage.style";

const ErrorPage = (props) => {
    const classes = useStyle();
    return <div className={classes.container}>Error Page</div>;
};
export default ErrorPage;

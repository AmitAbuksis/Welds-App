import React from "react";
import useStyle from "./HomePage.style";

const HomePage = (props) => {
    const classes = useStyle();
    return <div className={classes.container}>Home Page</div>;
};
export default HomePage;

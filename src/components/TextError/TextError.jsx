import React from "react";
import useStyle from "./TextError.style";

const TextError = (props) => {
    const classes = useStyle();
    return <div className={classes.error}>{props.children}</div>;
};
export default TextError;

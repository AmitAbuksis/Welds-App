import { makeStyles } from "@material-ui/core/styles";

const ErrorPageStyle = makeStyles((theme) => {
    return {
        errorPagecontainer: {
            width: "100%",
            height: "100%",
            margin: "20px",
            padding: "0",
            textAlign: "center",
        },
        homeBtn: {
            margin: "20px",
        },
    };
});
export default ErrorPageStyle;

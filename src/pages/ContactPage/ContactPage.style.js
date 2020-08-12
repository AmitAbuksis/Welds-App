import { makeStyles } from "@material-ui/core/styles";

const ContactPageStyle = makeStyles((theme) => {
    return {
        contactPageContainer: {
            marginTop: "50px",
            // ["@media screen and (max-width:800px)"]: {
            //     display: "block",
            // },
            [theme.breakpoints.down("md")]: {
                display: "block",
            },
        },
        detailsContainer: {
            padding: "0 20px 20px 20px",
            // ["@media screen and (max-width:800px)"]: {
            //     maxWidth: "100%",
            //     textAlign: "center",
            // },
            [theme.breakpoints.down("md")]: {
                maxWidth: "100%",
                textAlign: "center",
            },
        },
        formContainer: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            borderRadius: "5px",
            // ["@media screen and (max-width:800px)"]: {
            //     justifyContent: "center",
            //     maxWidth: "100%",
            // },
            [theme.breakpoints.down("md")]: {
                justifyContent: "center",
                maxWidth: "100%",
            },
        },
        detailsText: {
            margin: "10px",
            lineHeight: "45px",
            fontWeight: "bold",
        },
        subTitle: {
            color: "#717171",
        },
    };
});
export default ContactPageStyle;

import { makeStyles } from "@material-ui/core/styles";

const AboutPageStyle = makeStyles((theme) => {
    return {
        aboutPageContainer: {
            width: "100%",
            height: "100%",
            margin: "4px auto",
            textAlign: "center",
        },
        btnGroup: {
            margin: "40px auto",
        },
        ourCustomersBtn: {
            margin: "50px",
        },
        sectionText: {
            margin: "20px",
        },
        subTitle: {
            color: "#656060",
        },
        callUs: {
            marginBottom: "20px",
        },
        images: {
            width: "50%",
            height: "auto",
            margin: "15px",
            [theme.breakpoints.down("md")]: {
                width: "70%",
                height: "auto",
            },
        },
    };
});
export default AboutPageStyle;

import { makeStyles } from "@material-ui/core/styles";

const AboutPageStyle = makeStyles((theme) => {
    return {
        aboutPageContainer: {
            width: "100%",
            height: "100%",
            margin: "40px 20px",
            textAlign: "center",
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
            width: "25%",
            height: "auto",
            margin: "15px",
        },
    };
});
export default AboutPageStyle;

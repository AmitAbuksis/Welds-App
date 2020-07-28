import { makeStyles } from "@material-ui/core/styles";

const HomePageStyle = makeStyles((theme) => {
    return {
        container: {
            width: "100%",
            height: "100%",
            margin: "0",
            padding: "0",
            textAlign: "center",
        },
        imgContainer: {
            display: "flex",
            justifyContent: "center",
            margin: "40px auto",
        },
        image: {
            minWidth: "50%",
            height: "400px",
            margin: "12px 12px",
            // ["@media screen and (max-width: 600px)"]: {
            //     width: "100%",
            //     height: "100%",
            //     margin: "0",
            // },
        },
        btnPosition: {
            display: "flex",
            justifyContent: "center",
        },
        ourAddress: {
            fontSize: "20px",
            margin: "10px",
        },
        contactUsTxt: {
            fontWeight: "bold",
            color: "#656060",
            marginBottom: "10px",
        },
        textSection: {
            textAlign: "center",
            margin: "15px auto",
        },
    };
});
export default HomePageStyle;

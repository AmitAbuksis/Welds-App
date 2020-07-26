import { makeStyles } from "@material-ui/core/styles";

const HomePageStyle = makeStyles((theme) => {
    return {
        container: {
            width: "100%",
            height: "100%",
            margin: "0",
            padding: "0",
        },
        imgContainer: {
            display: "flex",
            justifyContent: "center",
            margin: "40px auto",
        },
        image: {
            minWidth: "50%",
            height: "260px",
            margin: "12px 12px",
        },
        btnPosition: {
            display: "flex",
            justifyContent: "center",
        },
        ourAddress: {
            fontSize: "20px",
            textAlign: "center",
            margin: "10px",
        },
        contactUsTxt: {
            fontWeight: "bold",
            color: "#656060",
            marginBottom: "10px",
        },
    };
});
export default HomePageStyle;

import { makeStyles } from "@material-ui/core/styles";

const FooterStyle = makeStyles((theme) => {
    return {
        footerContainer: {
            marginTop: "20px",
            padding: "10px",
            minWidth: "100%",
            height: "150px",
            backgroundColor: "#333",
            color: "white",
            display: "flex",
            justifyContent: "space-around",
        },
    };
});
export default FooterStyle;

import { makeStyles } from "@material-ui/core/styles";

const ContactPageStyle = makeStyles((theme) => {
    return {
        contactPageContainer: {
            marginTop: "50px",
        },
        detailsContainer: {
            padding: "0 20px 20px 20px",
        },
        formContainer: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            borderRadius: "5px",
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

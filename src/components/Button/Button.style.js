import { makeStyles } from "@material-ui/core/styles";

const ContactUsBtnStyle = makeStyles((theme) => {
    return {
        linkStyle: {
            textDecoration: "none",
            color: "#ffffff",
            borderRadius: "10px",
            backgroundColor: "#4498a2",
            fontSize: "20px",
            padding: "7px",
        },
    };
});
export default ContactUsBtnStyle;

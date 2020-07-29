import { makeStyles } from "@material-ui/core/styles";

const ContactUsFormStyle = makeStyles((theme) => {
    return {
        formContainer: {
            width: "65%",
            backgroundColor: "#e0dfdf",
            padding: "20px",
        },
        inputField: {
            width: "100%",
            padding: "12px 20px",
            margin: "8px 0",
            display: "inline-block",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
        },
        submitBtn: {
            width: "100%",
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "14px 20px",
            margin: "8px 0",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: "#45a049",
            },
        },
    };
});
export default ContactUsFormStyle;

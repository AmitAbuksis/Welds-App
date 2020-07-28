import { makeStyles } from "@material-ui/core/styles";

const OurCustomersPageStyle = makeStyles((theme) => {
    return {
        ourCustomersContainer: {
            width: "100%",
            height: "100%",
        },
        headerContainer: {
            margin: "20px 20px 20px 0",
        },
        headerText: {
            margin: "15px",
            lineHeight: "40px",
        },
        ourCustomerImagesContainer: {
            margin: "80px",
        },
        ourCustomersImagesRow: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        image: {
            width: "25%",
            height: "auto",
            margin: "10px",
            transition: "1s",
            cursor: "pointer",
            "&:hover": {
                transform: "scale(1.3)",
            },
        },
        contactUsBtn: {
            textAlign: "center",
            marginBottom: "50px",
        },
    };
});
export default OurCustomersPageStyle;

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
            lineHeight: "30px",
        },
        ourCustomerImagesContainer: {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            margin: "40px",
        },
        image: {
            padding: "0 20px 20px",
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

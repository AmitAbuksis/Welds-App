import { makeStyles } from "@material-ui/core/styles";

const FooterStyle = makeStyles((theme) => {
    return {
        footerContainer: {
            marginTop: "20px",
            width: "100%",
            height: "180px",
            backgroundColor: "#333",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            [theme.breakpoints.down("sm")]: {
                height: "100%",
            },
        },
        linksContainer: {
            [theme.breakpoints.up("sm")]: {
                paddingRight: "40px",
            },
        },
        linksSubContainer: {
            display: "flex",
        },
        linkContent: {
            margin: "15px",
            textDecoration: "underline",
            cursor: "pointer",
        },
        ourCustomerLink: {
            display: "flex",
            justifyContent: "center",
            marginTop: "12px",
            textDecoration: "underline",
            cursor: "pointer",
        },
        socialMediaIconsContainer: {
            display: "flex",
            alignItems: "center",
            [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
            },
        },
        socialMediaIcons: {
            width: "50px",
            height: "50px",
            margin: "15px",
            borderRadius: "25px",
            cursor: "pointer",
        },
        copyrights: {
            display: "flex",
            alignItems: "flex-end",
            fontSize: "10px",
        },
    };
});
export default FooterStyle;

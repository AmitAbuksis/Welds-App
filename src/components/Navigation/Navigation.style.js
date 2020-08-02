import { makeStyles } from "@material-ui/core/styles";

const NavigationStyle = makeStyles((theme) => {
    return {
        navContainer: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#333",
            paddingTop: "5px",
            overflow: "hidden",
        },
        navLink: {
            textDecoration: "none",
            listStyle: "none",
            padding: "14px 16px",
            fontSize: "17px",
            color: "white",
            textAlign: "center",
            "&:hover": {
                backgroundColor: "#ddd",
                color: "white",
            },
        },
        navItems: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
        },
    };
});
export default NavigationStyle;

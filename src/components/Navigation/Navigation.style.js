import { makeStyles } from "@material-ui/core/styles";

const NavigationStyle = makeStyles((theme) => {
    return {
        container: {
            backgroundColor: "#333",
            height: "54px",
        },
        navLink: {
            display: "block",
            textDecoration: "none",
            listStyle: "none",
            padding: "1rem",
            fontSize: "17px",
            color: "white",
            textAlign: "center",
            "&:hover": {
                backgroundColor: "#ddd",
                color: "white",
            },
            ["@media screen and (max-width:600px)"]: {
                padding: ".5rem 1rem",
            },
        },
    };
});
export default NavigationStyle;

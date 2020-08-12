import { makeStyles } from "@material-ui/core/styles";

const HeaderStyle = makeStyles((theme) => {
    return {
        headerContainer: {
            width: "100%",
            minHeight: "170px",
            backgroundColor: "#ffffff",
            cursor: "pointer",
        },
        headerElements: {
            display: "flex",
            alignItems: "center",
        },
        logoImage: {
            width: "200px",
            height: "200px",
            marginLeft: "70px",
            [theme.breakpoints.down("sm")]: {
                width: "50%",
                height: "auto",
                margin: "10px",
            },
        },
        headerSubTitle: {
            color: "#a2a2a2",
        },
        headerTxt: {
            [theme.breakpoints.down("sm")]: {
                fontSize: "25px",
            },
        },
    };
});
export default HeaderStyle;

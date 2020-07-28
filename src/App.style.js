import { makeStyles } from "@material-ui/core/styles";

const AppStyle = makeStyles((theme) => {
    return {
        whatsAppBox: {
            width: "50px",
            height: "50px",
            position: "fixed",
            bottom: "2px",
            cursor: "pointer",
        },
        whastAppIcon: {
            width: "100%",
            height: "100%",
            marginRight: "15px",
        },
    };
});
export default AppStyle;

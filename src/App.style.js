import { makeStyles } from "@material-ui/core/styles";

const AppStyle = makeStyles((theme) => {
    return {
        whatsAppBox: {
            width: "50px",
            height: "auto",
            position: "fixed",
            bottom: "2px",
            cursor: "pointer",
            right: "0",
        },
        whastAppIcon: {
            width: "100%",
            height: "100%",
        },
    };
});
export default AppStyle;

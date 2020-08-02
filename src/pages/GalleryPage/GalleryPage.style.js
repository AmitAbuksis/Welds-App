import { makeStyles } from "@material-ui/core/styles";

const GalleryPageStyle = makeStyles((theme) => {
    return {
        galleryContainer: {
            width: "100%",
            height: "100%",
        },
        galleryHeader: {
            textAlign: "center",
            margin: "20px",
            lineHeight: "80px",
        },
        galleryImagesContainer: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
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
        // galleryImagesRow: {
        //     display: "flex",
        //     alignItems: "center",
        //     justifyContent: "center",
        // },
        // image: {
        //     width: "25%",
        //     height: "auto",
        //     margin: "10px",
        //     transition: "1s",
        //     cursor: "pointer",
        //     "&:hover": {
        //         transform: "scale(1.3)",
        //     },
        // },
        contactUsBtn: {
            textAlign: "center",
            marginBottom: "50px",
        },
    };
});
export default GalleryPageStyle;

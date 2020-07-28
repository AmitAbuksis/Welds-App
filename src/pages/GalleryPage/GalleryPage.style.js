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
            margin: "80px",
        },
        galleryImagesRow: {
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
export default GalleryPageStyle;

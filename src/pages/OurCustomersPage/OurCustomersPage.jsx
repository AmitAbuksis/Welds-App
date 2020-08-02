import React from "react";
import useStyle from "./OurCustomersPage.style";
import exampleLogo from "../../assets/images/example_logo.png";

import Button from "../../components/Button/Button";

import { Typography } from "@material-ui/core";

const OurCustomersPage = (props) => {
    const classes = useStyle();
    return (
        <div className={classes.ourCustomersContainer}>
            <div className={classes.headerContainer}>
                <Typography variant="h5">הלקוחות שלנו</Typography>
                <p className={classes.headerText}>
                    ריתוכי חוזה מתמחים בעבודות ריתוך ארגון – ריתוך אלומיניום, נירוסטה, טיטניום ועוד. תיקון מוצרים ומתן פתרונות יצירתיים תוך בחירת
                    החומר הטוב ביותר לשביעות רצון הלקוח. <br />
                    לפניכם מספר דוגמאות לחברות בתחום התעשייה, מוסדות וארגונים שנהנו משירותינו. נשמח לעמוד גם לשירותכם!
                </p>
            </div>
            <div className={classes.ourCustomerImagesContainer}>
                <img src={exampleLogo} alt="exampleLogo" className={classes.image} />
                <img src={exampleLogo} alt="exampleLogo" className={classes.image} />
                <img src={exampleLogo} alt="exampleLogo" className={classes.image} />
                <img src={exampleLogo} alt="exampleLogo" className={classes.image} />
                <img src={exampleLogo} alt="exampleLogo" className={classes.image} />
                <img src={exampleLogo} alt="exampleLogo" className={classes.image} />
                <img src={exampleLogo} alt="exampleLogo" className={classes.image} />
                <img src={exampleLogo} alt="exampleLogo" className={classes.image} />
                <img src={exampleLogo} alt="exampleLogo" className={classes.image} />
            </div>
            <div className={classes.contactUsBtn}>
                <Button label={"צרו איתנו קשר"} direction={"/contact"} />
            </div>
        </div>
    );
};
export default OurCustomersPage;

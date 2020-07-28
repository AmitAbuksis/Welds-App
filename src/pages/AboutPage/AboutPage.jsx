import React from "react";
import useStyle from "./AboutPage.style";
import welderHomeImage from "../../assets/images/welder-home.jpg";
import welderWork1 from "../../assets/images/welder_work1.jpg";
import welderWork2 from "../../assets/images/welder_work2.jpg";

import Button from "../../components/Button/Button";
import { Typography } from "@material-ui/core";

const AboutPage = (props) => {
    const classes = useStyle();
    return (
        <div className={classes.aboutPageContainer}>
            <Button label={"הקליקו כאן ליצירת קשר"} direction={"/contact"} />
            <div className={classes.ourCustomersBtn}>
                <Button label={"בין לקוחותינו"} direction={"/ourCustomers"} />
            </div>
            <Typography variant="h6">ריתוכי חוזה - ריתוכי אלומיניום ועוד</Typography>
            <div className={classes.sectionText}>
                <Typography variant="h6" className={classes.subTitle}>
                    כותרת משנה
                </Typography>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facere, placeat modi eos obcaecati incidunt ducimus fugiat
                    aspernatur quia nesciunt eligendi consequatur eum quas expedita deserunt sit officiis quisquam minima. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Veritatis facere, placeat modi eos obcaecati incidunt ducimus fugiat aspernatur quia nesciunt
                    eligendi consequatur eum quas expedita deserunt sit officiis quisquam minima.
                </p>
                <img className={classes.images} alt="welder" src={welderHomeImage} />
            </div>
            <div className={classes.sectionText}>
                <Typography variant="h6" className={classes.subTitle}>
                    כותרת משנה
                </Typography>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facere, placeat modi eos obcaecati incidunt ducimus fugiat
                    aspernatur quia nesciunt eligendi consequatur eum quas expedita deserunt sit officiis quisquam minima. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Veritatis facere, placeat modi eos obcaecati incidunt ducimus fugiat aspernatur quia nesciunt
                    eligendi consequatur eum quas expedita deserunt sit officiis quisquam minima.
                </p>
                <img className={classes.images} alt="welder" src={welderWork1} />
            </div>
            <div className={classes.sectionText}>
                <Typography variant="h6" className={classes.subTitle}>
                    כותרת משנה
                </Typography>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facere, placeat modi eos obcaecati incidunt ducimus fugiat
                    aspernatur quia nesciunt eligendi consequatur eum quas expedita deserunt sit officiis quisquam minima. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Veritatis facere, placeat modi eos obcaecati incidunt ducimus fugiat aspernatur quia nesciunt
                    eligendi consequatur eum quas expedita deserunt sit officiis quisquam minima.
                </p>
                <img className={classes.images} alt="welder" src={welderWork2} />
            </div>
            <Typography variant="h6" className={`${classes.subTitle} ${classes.callUs}`}>
                לפרטים נוספים והזמנות התקשרו או השאירו פרטים ונחזור אליכם במהירות
            </Typography>
            <Button label={"הקליקו כאן ליצירת קשר"} direction={"/contact"} />
        </div>
    );
};
export default AboutPage;

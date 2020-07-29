import React from "react";
import useStyle from "./ContactPage.style";

import { Grid, Typography } from "@material-ui/core";

import ContactUsForm from "../../components/ContactUsForm/ContactUsForm";

const ContactPage = (props) => {
    const { onSubmitForm } = props;
    const classes = useStyle();

    return (
        <Grid container className={classes.contactPageContainer}>
            <Grid item xs={6} className={classes.detailsContainer}>
                <Typography variant="h5" className={classes.detailsText}>
                    צרו איתנו קשר!
                </Typography>
                <Typography variant="h4" className={`${classes.detailsText} ${classes.subTitle}`}>
                    אתם מוזמנים ליצור איתנו קשר בכל זמן דרך הטלפון הטופס או המייל!
                </Typography>
                <Typography variant="h6" className={classes.detailsText}>
                    כתובת: רח' בלה בלה 17, ראשון לציון
                </Typography>
                <Typography variant="h6" className={classes.detailsText}>
                    טלפון נייד: 054-5512329
                </Typography>
                <Typography variant="h6" className={classes.detailsText}>
                    דואר אלקטרוני: amitabuksis8@gmail.com
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.formContainer}>
                <ContactUsForm onSubmitForm={onSubmitForm} />
            </Grid>
        </Grid>
    );
};
export default ContactPage;

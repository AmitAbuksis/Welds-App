import React from "react";
import useStyle from "./ContactPage.style";

import { Grid } from "@material-ui/core";

import ContactUsForm from "../../components/ContactUsForm/ContactUsForm";

const ContactPage = (props) => {
    const { onSubmitForm } = props;
    const classes = useStyle();

    return (
        <Grid container>
            <Grid item xs={6}></Grid>
            <Grid item xs={6} className={classes.formContainer}>
                <ContactUsForm onSubmitForm={onSubmitForm} />
            </Grid>
        </Grid>
    );
};
export default ContactPage;

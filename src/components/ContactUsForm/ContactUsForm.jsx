import React from "react";
import makeStyle from "./ContactUsForm.style";

import TextError from "../TextError/TextError";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialFormValues = {
    name: "",
    phone: "",
    email: "",
    details: "",
};

const validationFormSchema = Yup.object({
    name: Yup.string().required("שדה חובה").min(2, "שם אמור להכיל לפחות 2 אותיות"),
    email: Yup.string().email("כתובת שגויה").required("שדה חובה"),
    phone: Yup.string().required("שדה חובה").matches("^[0-9]*$", "יש להכיל ספרות בלבד"),
    details: Yup.string().max(256, "פרטים יכולים להכיל עד 256 תווים בלבד"),
});

const ContactUsForm = (props) => {
    const { onSubmitForm } = props;
    const classes = makeStyle();

    const onSubmit = (values) => {
        onSubmitForm(values);
    };

    return (
        <div className={classes.contactUsFormContainer}>
            <Formik initialValues={initialFormValues} validationSchema={validationFormSchema} onSubmit={onSubmit}>
                <Form>
                    <div className={classes.formControl}>
                        <label type="text" name="name">
                            שם
                        </label>
                        <Field type="text" name="name" className={classes.inputField} />
                        <ErrorMessage name="name" component={TextError} />
                    </div>
                    <div className={classes.formControl}>
                        <label type="text" name="email">
                            דואר אלקטרוני
                        </label>
                        <Field type="email" name="email" placeholder="your.email@gmail.com" className={classes.inputField} />
                        <ErrorMessage name="email" component={TextError} />
                    </div>
                    <div className={classes.formControl}>
                        <label type="text" name="phone">
                            טלפון
                        </label>
                        <Field type="" name="phone" className={classes.inputField} />
                        <ErrorMessage name="phone" component={TextError} />
                    </div>
                    <div className={classes.formControl}>
                        <label type="text" name="details">
                            פרטים
                        </label>
                        <Field as="textarea" name="details" className={classes.inputField} />
                        <ErrorMessage name="details" component={TextError} />
                    </div>
                    <button type="submit" className={classes.submitBtn}>
                        שלח
                    </button>
                </Form>
            </Formik>
        </div>
    );
};
export default ContactUsForm;

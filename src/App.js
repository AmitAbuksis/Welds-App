import React from "react";
import useStyle from "./App.style";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import OurCustomersPage from "./pages/OurCustomersPage/OurCustomersPage";

import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import EmailService from "./services/email.service";

import { makeEmailBody } from "./global/utils/email.util";
import { SocialMediaConsts, emailConsts, whastappConsts } from "./global/const";

import Tooltip from "@material-ui/core/Tooltip";

const App = () => {
    const classes = useStyle();

    const redirectToSocialMedia = (variant) => {
        if (variant === SocialMediaConsts.FACEBOOK_VARIANT) {
            return window.open(SocialMediaConsts.FACEBOOK_ADDRESS);
        } else if (variant === SocialMediaConsts.INSTAGRAM_VARIANT) {
            return window.open(SocialMediaConsts.INSTAGRAM_ADDRESS);
        }
    };

    const submitForm = (values) => {
        const body = makeEmailBody(values);
        EmailService.sendEmail(emailConsts.EMAIL_ADDRESS, emailConsts.EMAIL_SUBJECT, body);
    };

    return (
        <Router>
            <div>
                <Header headerTitle={"ריתוכי חוזה"} headerSubTitle={"עבודות ריתוך מקצועיות"} />
                <div style={{ position: "sticky", top: "0" }}>
                    <Navigation />
                </div>
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/gallery" component={GalleryPage} />
                    <Route path="/contact" component={() => <ContactPage onSubmitForm={submitForm} />} />
                    <Route path="/ourCustomers" component={OurCustomersPage} />
                    <Route component={ErrorPage} />
                </Switch>
                <Tooltip title="דבר איתנו בואצאפ.">
                    <div className={classes.whatsAppBox} onClick={() => window.open(whastappConsts.WHATSAPP_URL)}>
                        <img src={`${whastappConsts.WHATSAPP_ICON}`} alt="whastAppIcon" className={classes.whastAppIcon} />
                    </div>
                </Tooltip>
                <Footer redirectToSocialMedia={redirectToSocialMedia} />
            </div>
        </Router>
    );
};

export default App;

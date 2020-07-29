import React from "react";
import useStyle from "./App.style";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AboutPage from "./pages/AboutPage/AboutPage";
//import ServicesPage from "./pages/ServicesPage/ServicesPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import OurCustomersPage from "./pages/OurCustomersPage/OurCustomersPage";

import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Tooltip from "@material-ui/core/Tooltip";

function App() {
    const classes = useStyle();

    const redirectToSocialMedia = (variant) => {
        if (variant === "facebook") {
            return window.open("https://www.facebook.com/profile.php?id=1274526780");
        } else if (variant === "instagram") {
            return window.open("https://www.instagram.com");
        }
    };

    const submitForm = (values) => {
        console.log(values);
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
                    {/* <Route path="/services" component={ServicesPage} /> */}
                    <Route path="/gallery" component={GalleryPage} />
                    <Route path="/contact" component={() => <ContactPage onSubmitForm={submitForm} />} />
                    <Route path="/ourCustomers" component={OurCustomersPage} />
                    <Route component={ErrorPage} />
                </Switch>
                <Tooltip title="דבר איתנו בואצאפ.">
                    <div className={classes.whatsAppBox} onClick={() => window.open("https://wa.me/+972545512329")}>
                        <img src="https://img.icons8.com/color/100/000000/whatsapp.png" alt="whastAppIcon" className={classes.whastAppIcon} />
                    </div>
                </Tooltip>
                <Footer redirectToSocialMedia={redirectToSocialMedia} />
            </div>
        </Router>
    );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import OurCustomersPage from "./pages/OurCustomersPage/OurCustomersPage";

import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <div style={{ position: "sticky", top: "0" }}>
                    <Navigation />
                </div>
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/services" component={ServicesPage} />
                    <Route path="/gallery" component={GalleryPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/ourCustomers" component={OurCustomersPage} />
                    <Route component={ErrorPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

import React from "react";
import useStyle from "./HomePage.style";
import welderHome from "../../assets/images/welder-home.jpg";

import { Typography } from "@material-ui/core";

import ContactUsBtn from "../../components/ContactUsButton/ContactUsBtn";
import Footer from "../../components/Footer/Footer";

const HomePage = (props) => {
    const { onContactUsClick, history } = props;
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <div className={classes.imgContainer}>
                <img className={classes.image} src={welderHome} alt="welder" />
            </div>
            <div className={classes.btnPosition}>
                <ContactUsBtn label={"הקליקו כדי ליצור איתנו קשר"} direction="/contact" />
            </div>
            <div className={classes.ourAddress}>כתובת להגעה - רחוב אהרונסון 12 ראשון לציון</div>
            <div className={classes.btnPosition}>
                <ContactUsBtn label={"בין לקוחותינו"} direction="/ourCustomers" />
            </div>
            <div className={classes.textSection}>
                <Typography variant="h5">עבודות ריתוך בלה בלה</Typography>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quos dignissimos vitae ducimus perspiciatis sint et cum,
                    praesentium, cumque eos rerum! Laudantium esse delectus magni doloribus optio aliquam minima atque.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium, iste mollitia voluptatum similique molestias eius quis
                    inventore aspernatur, sunt praesentium veniam id obcaecati veritatis? Repudiandae dolores aspernatur totam veniam.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quos dignissimos vitae ducimus perspiciatis sint et cum,
                    praesentium, cumque eos rerum! Laudantium esse delectus magni doloribus optio aliquam minima atque.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium, iste mollitia voluptatum similique molestias eius quis
                    inventore aspernatur, sunt praesentium veniam id obcaecati veritatis? Repudiandae dolores aspernatur totam veniam.
                </p>
            </div>
            <div className={classes.textSection}>
                <Typography variant="h5">עבודות ריתוך בלה בלה</Typography>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quos dignissimos vitae ducimus perspiciatis sint et cum,
                    praesentium, cumque eos rerum! Laudantium esse delectus magni doloribus optio aliquam minima atque.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium, iste mollitia voluptatum similique molestias eius quis
                    inventore aspernatur, sunt praesentium veniam id obcaecati veritatis? Repudiandae dolores aspernatur totam veniam.
                </p>
                <img className={classes.imageInner} src={welderHome} alt="welder" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium, iste mollitia voluptatum similique molestias eius quis
                    inventore aspernatur, sunt praesentium veniam id obcaecati veritatis? Repudiandae dolores aspernatur totam veniam.
                </p>
            </div>
            <div className={classes.textSection}>
                <Typography variant="h5">עבודות ריתוך בלה בלה</Typography>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quos dignissimos vitae ducimus perspiciatis sint et cum,
                    praesentium, cumque eos rerum! Laudantium esse delectus magni doloribus optio aliquam minima atque.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium, iste mollitia voluptatum similique molestias eius quis
                    inventore aspernatur, sunt praesentium veniam id obcaecati veritatis? Repudiandae dolores aspernatur totam veniam.
                </p>
            </div>
            <div className={classes.contactUsTxt}>לפרטים ולהזמנות צרו עמנו קשר בטלפון או השאירו פרטים באתר ונחזור אליכם במהרה!</div>
            <div className={classes.btnPosition}>
                <ContactUsBtn label={"הקליקו כדי ליצור איתנו קשר"} />
            </div>
            <Footer />
        </div>
    );
};
export default HomePage;

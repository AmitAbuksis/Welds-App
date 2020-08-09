import * as emailjs from "emailjs-com";
import { emailConsts } from "../global/const";

class EmailService {
    sendEmail(to, body) {
        let templateParams = {
            from_name: `${process.env.REACT_APP_EMAIL_ADDRESS}`,
            to_name: to,
            subject: `${emailConsts.EMAIL_SUBJECT}`,
            message_html: body,
        };
        emailjs.send(
            `${process.env.REACT_APP_EMAIL_TYPE}`,
            `${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`,
            templateParams,
            `${process.env.REACT_APP_EMAIL_USER_ID}`
        );
    }
}
export default new EmailService();

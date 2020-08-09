import * as emailjs from "emailjs-com";
import { emailConsts } from "../global/const";

class EmailService {
    sendEmail(to, body) {
        console.log(body);
        let templateParams = {
            from_name: emailConsts.EMAIL_ADDRESS,
            to_name: to,
            subject: emailConsts.EMAIL_SUBJECT,
            message_html: body,
        };
        emailjs.send("gmail", "template_R8YLEXo5", templateParams, "user_OzxiV0hg7ktoUTpNydMk0");
    }
}
export default new EmailService();

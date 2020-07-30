class EmailService {
    sendEmail(address, subject, body) {
        window.open(`mailto:${address}?subject=${subject}&body=${body}`);
    }
}
export default new EmailService();

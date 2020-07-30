export const makeEmailBody = (values) => {
    const detailsLabel = values.details ? "פרטים:" + values.details : "";
    const emailBody = `שלום רב,
    לקוח השאיר את פרטיו באתר, להלן הפרטים:
    שם: ${values.name}
    דואר אלקטרוני: ${values.email}
    מספר טלפון: ${values.phone}
    ${detailsLabel}
    שיהיה בהצלחה!`;
    return emailBody;
};

export const makeEmailBody = (values) => {
    const detailsLabel = values && values.details ? "פרטים:" + values.details : "";
    const emailBody = `
    שם: ${values.name}
    דואר אלקטרוני: ${values.email}
    מספר טלפון: ${values.phone}
    ${detailsLabel}`;
    return emailBody;
};

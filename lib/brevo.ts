const BREVO_API_KEY = String(process.env.BREVO_CODE_SENDER);
const brevo = require("@getbrevo/brevo");
let apiInstance = new brevo.TransactionalEmailsApi();

let apiKey = apiInstance.authentications["apiKey"];
apiKey.apiKey = BREVO_API_KEY;

let sendSmtpEmail = new brevo.SendSmtpEmail();

const sendEmail = async (
  name: string,
  email: string,
  company: string,
  message: string
) => {
  sendSmtpEmail.subject = `Business Proposal - ${company}`;
  sendSmtpEmail.htmlContent = `<html><body><h1>${name} - ${company}</h1><h2>${email}</h2><p>${message}</p></body></html>`;
  sendSmtpEmail.sender = { name, email };
  sendSmtpEmail.to = [
    { email: "thiagosalaberry99@gmail.com", name: "Thiago Salaberry" },
  ];
  sendSmtpEmail.params = {
    parameter: "My param value",
    subject: "common subject",
  };
  await apiInstance.sendTransacEmail(sendSmtpEmail);
};

export { sendEmail };

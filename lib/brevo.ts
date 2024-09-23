import * as brevo from "@getbrevo/brevo";
let apiInstance = new brevo.AccountApi();
const BREVO_API_KEY = String(process.env.BREVO_CODE_SENDER);
apiInstance.setApiKey(brevo.AccountApiApiKeys.apiKey, BREVO_API_KEY);

let emailSender = new brevo.TransactionalEmailsApi();
emailSender.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  BREVO_API_KEY
);
let sendSmtpEmail = new brevo.SendSmtpEmail();
export async function sendContactEmail(
  name: string,
  email: string,
  company: string,
  message: string
) {
  sendSmtpEmail.subject = `Business Proposal - ${company}`;
  sendSmtpEmail.htmlContent = `<html><body><h1>${name} - ${company}</h1><h2>${email}</h2><p>${message}</p></body></html>`;
  sendSmtpEmail.sender = { name, email };
  sendSmtpEmail.to = [{ email: "thiagosalaberry99@gmail.com" }];
  sendSmtpEmail.params = {
    parameter: "My param value",
    subject: "New Subject",
  };
  await emailSender.sendTransacEmail(sendSmtpEmail);
}

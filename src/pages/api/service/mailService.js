const nodemailer = require("nodemailer");
require("dotenv").config();

//creamos un servicio que utilizará la biblioteca nodemailer para construir objetos de correo electrónico y enviar correos electrónicos
async function sendMail(subject, toEmail, otpText) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    text: otpText,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Unable to send email.");
  }
}

module.exports = { sendMail };

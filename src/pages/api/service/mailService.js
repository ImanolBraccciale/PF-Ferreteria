const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendMail(subject, toEmail, otpText, loginText) {
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
    text: otpText || loginText,
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

async function sendPurchaseConfirmation(toEmail, productSummary) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const subject = "Confirmación de compra";
  const purchaseText = `Gracias por preferirnos. El resumen de tu compra:\n\n${JSON.stringify(
    productSummary,
    null,
    2
  )}`;
  // console.log("toEmail", toEmail);
  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    text: purchaseText,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo de confirmación de compra enviado:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error al enviar correo de confirmación de compra:", error);
    throw new Error("No se pudo enviar el correo de confirmación de compra.");
  }
}

module.exports = {
  sendMail,
  sendPurchaseConfirmation,
};
